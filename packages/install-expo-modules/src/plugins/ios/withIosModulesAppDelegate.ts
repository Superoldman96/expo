import { ConfigPlugin, IOSConfig, withAppDelegate, withDangerousMod } from '@expo/config-plugins';
import {
  addObjcImports,
  addSwiftImports,
  insertContentsInsideObjcFunctionBlock,
  insertContentsInsideSwiftFunctionBlock,
} from '@expo/config-plugins/build/ios/codeMod';
import fs from 'fs';
import { globSync } from 'glob';
import semver from 'semver';

import {
  getDesignatedSwiftBridgingHeaderFileReference,
  withXCParseXcodeProject,
} from './withXCParseXcodeProject';

export const withIosModulesAppDelegate: ConfigPlugin = (config) => {
  return withAppDelegate(config, (config) => {
    config.modResults.contents = ['objc', 'objcpp'].includes(config.modResults.language)
      ? updateModulesAppDelegateObjcImpl(config.modResults.contents, config.sdkVersion)
      : updateModulesAppDelegateSwift(config.modResults.contents, config.sdkVersion);
    return config;
  });
};

export const withIosModulesAppDelegateObjcHeader: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      try {
        const appDelegateObjcHeaderPath = IOSConfig.Paths.getAppDelegateObjcHeaderFilePath(
          config.modRequest.projectRoot
        );
        let contents = await fs.promises.readFile(appDelegateObjcHeaderPath, 'utf8');
        contents = updateModulesAppDelegateObjcHeader(contents, config.sdkVersion);
        await fs.promises.writeFile(appDelegateObjcHeaderPath, contents);
      } catch {}
      return config;
    },
  ]);
};

export const withIosModulesSwiftBridgingHeader: ConfigPlugin = (config) => {
  return withXCParseXcodeProject(config, async (config) => {
    const bridgingHeaderFileName = getDesignatedSwiftBridgingHeaderFileReference(config.modResults);
    if (!bridgingHeaderFileName) {
      return config;
    }

    const [bridgingHeaderFilePath] = globSync(
      `ios/${bridgingHeaderFileName.replace(/['"]/g, '')}`,
      {
        absolute: true,
        cwd: config.modRequest.projectRoot,
      }
    );
    if (!bridgingHeaderFilePath) {
      return config;
    }
    let contents = await fs.promises.readFile(bridgingHeaderFilePath, 'utf8');

    if (!contents.match(/^#import\s+<Expo\/Expo\.h>\s*$/m)) {
      contents = addObjcImports(contents, ['<Expo/Expo.h>']);
    }

    await fs.promises.writeFile(bridgingHeaderFilePath, contents);
    return config;
  });
};

export function updateModulesAppDelegateObjcImpl(
  contents: string,
  sdkVersion: string | undefined
): string {
  // application:didFinishLaunchingWithOptions:
  const superDidFinishLaunchingWithOptionsCode =
    '[super application:application didFinishLaunchingWithOptions:launchOptions];';
  if (!contents.includes(` ${superDidFinishLaunchingWithOptionsCode}`)) {
    contents = insertContentsInsideObjcFunctionBlock(
      contents,
      'application:didFinishLaunchingWithOptions:',
      superDidFinishLaunchingWithOptionsCode,
      { position: 'tailBeforeLastReturn' }
    );
  }

  // ExpoReactDelegate
  if (sdkVersion && semver.gte(sdkVersion, '44.0.0')) {
    contents = contents.replace(
      /\[\[RCTBridge alloc\] initWithDelegate:/g,
      '[self.reactDelegate createBridgeWithDelegate:'
    );
    contents = contents.replace(
      /\[\[RCTRootView alloc\] initWithBridge:/g,
      '[self.reactDelegate createRootViewWithBridge:'
    );
    contents = contents.replace(/\bRCTAppSetupDefaultRootView\((.+)\)/g, (match, group) => {
      const [bridge, moduleName, initProps] = group.split(',').map((s: string) => s.trim());
      return `[self.reactDelegate createRootViewWithBridge:${bridge} moduleName:${moduleName} initialProperties:${initProps}]`;
    });
    contents = contents.replace(
      /\[UIViewController new\]/g,
      '[self.reactDelegate createRootViewController]'
    );
  }

  return contents;
}

export function updateModulesAppDelegateObjcHeader(
  contents: string,
  sdkVersion: string | undefined
): string {
  // Add imports if needed
  if (!contents.match(/^#import\s+<Expo\/Expo\.h>\s*$/m)) {
    contents = addObjcImports(contents, ['<Expo/Expo.h>']);
  }

  // Replace parent class if needed
  contents = contents.replace(
    /^(\s*@interface\s+AppDelegate\s+:\s+)RCTAppDelegate$/m,
    '$1EXAppDelegateWrapper'
  ); // react-native@>=0.71.0

  contents = contents.replace(
    /^(\s*@interface\s+AppDelegate\s+:\s+)UIResponder(\s+.+)$/m,
    '$1EXAppDelegateWrapper$2'
  ); // react-native@<0.71.0

  return contents;
}

export function updateModulesAppDelegateSwift(
  contents: string,
  sdkVersion: string | undefined
): string {
  if (sdkVersion) {
    if (semver.lt(sdkVersion, '52.0.0')) {
      return updateModulesAppDelegateSwiftLegacy(contents, sdkVersion);
    }
    if (semver.lt(sdkVersion, '53.0.0')) {
      return updateModulesAppDelegateSwiftSdk52(contents, sdkVersion);
    }
  }

  // Add imports if needed
  if (!contents.match(/^import\s+Expo\s*$/m)) {
    contents = addSwiftImports(contents, ['Expo']);
  }

  // Replace superclass with ExpoAppDelegate
  contents = contents.replace(
    /^(class\s+AppDelegate\s*:\s*)UIResponder,\s*UIApplicationDelegate(\W+)/m,
    '$1ExpoAppDelegate$2'
  );
  // Add `override` keyword and return super call to didFinishLaunchingWithOptions
  contents = contents.replace(
    /\b(func application\([\s\S]+?didFinishLaunchingWithOptions launchOptions[\s\S]+?\{[\s\S]+?)(return true)([\s\S]+?\})/m,
    'override $1return super.application(application, didFinishLaunchingWithOptions: launchOptions)$3'
  );
  // Add `bindReactNativeFactory`
  if (!contents.match(/\bbindReactNativeFactory\(/)) {
    contents = contents.replace(
      /(\breactNativeFactory\s+?=\s+?factory$)/m,
      `$1
    bindReactNativeFactory(factory)`
    );
  }

  // Use Expo classes
  contents = contents.replace(/\b(RCTReactNativeFactory)(\()/, 'ExpoReactNativeFactory$2');
  contents = contents.replace(
    /\bRCTDefaultReactNativeFactoryDelegate\b/,
    'ExpoReactNativeFactoryDelegate'
  );
  contents = contents.replace(
    /(\boverride.*\ssourceURL\(.*\{[\s\S]+?)(\s+self\.bundleURL\(\))/m,
    `$1\
    // needed to return the correct URL for expo-dev-client.
    bridge.bundleURL ?? bundleURL()`
  );

  return contents;
}

function updateModulesAppDelegateSwiftSdk52(
  contents: string,
  sdkVersion: string | undefined
): string {
  // Add imports if needed
  if (!contents.match(/^import\s+Expo\s*$/m)) {
    contents = addSwiftImports(contents, ['Expo']);
  }
  // SDK 52 serves ExpoAppDelegate from ExpoModulesCore. We also need to import it.
  if (!contents.match(/^import\s+ExpoModulesCore\s*$/m)) {
    contents = addSwiftImports(contents, ['ExpoModulesCore']);
  }

  // Replace superclass with ExpoAppDelegate
  contents = contents.replace(
    /^(class\s+AppDelegate\s*:\s*)RCTAppDelegate(\W+)/m,
    '$1ExpoAppDelegate$2'
  );

  return contents;
}

function updateModulesAppDelegateSwiftLegacy(
  contents: string,
  sdkVersion: string | undefined
): string {
  // Replace superclass with AppDelegateWrapper
  contents = contents.replace(
    /^(class\s+AppDelegate\s*:\s*)NSObject,\s*UIApplicationDelegate(\W+)/m,
    '$1AppDelegateWrapper$2'
  );

  // application:didFinishLaunchingWithOptions:
  const superDidFinishLaunchingWithOptionsCode =
    'super.application(application, didFinishLaunchingWithOptions: launchOptions)';
  if (!contents.includes(` ${superDidFinishLaunchingWithOptionsCode}`)) {
    contents = insertContentsInsideSwiftFunctionBlock(
      contents,
      'application(_:didFinishLaunchingWithOptions:)',
      superDidFinishLaunchingWithOptionsCode,
      { position: 'tailBeforeLastReturn', indent: 4 }
    );
  }

  // ExpoReactDelegate
  if (sdkVersion && semver.gte(sdkVersion, '44.0.0')) {
    contents = contents.replace(/\bRCTBridge\(delegate:/g, 'reactDelegate.createBridge(delegate:');
    contents = contents.replace(/\bRCTRootView\(bridge:/g, 'reactDelegate.createRootView(bridge:');
    contents = contents.replace(
      /\bUIViewController\(\)/g,
      'reactDelegate.createRootViewController()'
    );
  }

  return contents;
}
