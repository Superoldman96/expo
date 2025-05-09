
#import <UIKit/UIKit.h>
#import <Expo/RCTAppDelegateUmbrella.h>
#import <React/RCTBridgeDelegate.h>
#import <React/RCTReloadCommand.h>

#import "EXAppFetcher.h"
#import "EXKernelAppRecord.h"
#import "ExpoAppInstance.h"

typedef enum EXReactAppManagerStatus {
  kEXReactAppManagerStatusNew,
  kEXReactAppManagerStatusBridgeLoading,
  kEXReactAppManagerStatusRunning,
  kEXReactAppManagerStatusError,
} EXReactAppManagerStatus;

@protocol EXReactAppManagerUIDelegate <NSObject>

- (void)reactAppManagerIsReadyForLoad:(EXReactAppManager *)appManager;
- (void)reactAppManagerStartedLoadingJavaScript:(EXReactAppManager *)appManager;
- (void)reactAppManagerFinishedLoadingJavaScript:(EXReactAppManager *)appManager;
- (void)reactAppManagerAppContentDidAppear:(EXReactAppManager *)appManager;
- (void)reactAppManagerAppContentWillReload:(EXReactAppManager *)appManager;
- (void)reactAppManager:(EXReactAppManager *)appManager failedToLoadJavaScriptWithError:(NSError *)error;
- (void)reactAppManagerDidInvalidate:(EXReactAppManager *)appManager;

@end
 
@interface EXReactAppManager : NSObject <EXAppFetcherDataSource>

- (instancetype)initWithAppRecord:(EXKernelAppRecord *)record initialProps:(NSDictionary *)initialProps;
- (void)rebuildHost;
- (void)invalidate;

// these are piped in from the view controller when the app manager is waiting for a bundle.
- (void)appLoaderFinished;
- (void)appLoaderFailedWithError:(NSError *)error;

@property (nonatomic, assign) BOOL isHeadless;
@property (nonatomic, readonly) BOOL isReactHostRunning;
@property (nonatomic, readonly) EXReactAppManagerStatus status;
@property (nonatomic, readonly) UIView *rootView;
@property (nonatomic, readonly) NSString *scopedDocumentDirectory;
@property (nonatomic, readonly) NSString *scopedCachesDirectory;
@property (nonatomic, strong) id reactHost;
@property (nonatomic, strong) ExpoAppInstance *expoAppInstance;
@property (nonatomic, assign) id<EXReactAppManagerUIDelegate> delegate;
@property (nonatomic, weak) EXKernelAppRecord *appRecord;

#pragma mark - developer tools

- (BOOL)enablesDeveloperTools;
- (BOOL)requiresValidManifests;

/**
 * Call reload on existing bridge (developer-facing devtools reload)
 */
- (void)reloadApp;

/**
 * Clear any executor class on the bridge and reload. Used by Cmd+N devtool key command.
 */
- (void)togglePerformanceMonitor;
- (void)toggleElementInspector;
- (void)showDevMenu;

/**
 *  Enumerates items for the dev menu for this app
 */
- (NSDictionary<NSString *, NSString *> *)devMenuItems;
- (void)selectDevMenuItemWithKey:(NSString *)key;

@end

@interface EXReactAppManager () <RCTReloadListener>
@end
