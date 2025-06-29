# Changelog

## Unpublished

### 🛠 Breaking changes

### 🎉 New features

- [iOS] added `useApplicationAudioSession` option ([#37487](https://github.com/expo/expo/pull/37487) by [@vonovak](https://github.com/vonovak))

### 🐛 Bug fixes

### 💡 Others

## 13.1.7 — 2025-05-06

### 🐛 Bug fixes

- [Android] Fix calling getVoices before TTS initialization ([#36664](https://github.com/expo/expo/pull/36664) by [@jakex7](https://github.com/jakex7))

## 13.1.6 — 2025-04-30

_This version does not introduce any user-facing changes._

## 13.1.5 — 2025-04-25

_This version does not introduce any user-facing changes._

## 13.1.4 — 2025-04-14

_This version does not introduce any user-facing changes._

## 13.1.3 — 2025-04-11

_This version does not introduce any user-facing changes._

## 13.1.2 — 2025-04-09

_This version does not introduce any user-facing changes._

## 13.1.1 — 2025-04-08

_This version does not introduce any user-facing changes._

## 13.1.0 — 2025-04-04

### 💡 Others

- [Android] Started using expo modules gradle plugin. ([#34176](https://github.com/expo/expo/pull/34176) by [@lukmccall](https://github.com/lukmccall))
- [apple] Migrate remaining `expo-module.config.json` to unified platform syntax. ([#34445](https://github.com/expo/expo/pull/34445) by [@reichhartd](https://github.com/reichhartd))
- [iOS] Fix warnings which will become errors in Swift 6. ([#35288](https://github.com/expo/expo/pull/35288) by [@behenate](https://github.com/behenate))

## 13.0.1 - 2025-01-10

_This version does not introduce any user-facing changes._

## 13.0.0 — 2024-10-22

### 🛠 Breaking changes

- Bumped iOS deployment target to 15.1. ([#30840](https://github.com/expo/expo/pull/30840) by [@tsapeta](https://github.com/tsapeta))

### 🐛 Bug fixes

- [Web] Fix `onDone` not firing listeners. ([#28904](https://github.com/expo/expo/pull/28904) by [@aleqsio](https://github.com/aleqsio))

### 💡 Others

- [Web] Change module registration. ([#29870](https://github.com/expo/expo/pull/29870) by [@aleqsio](https://github.com/aleqsio))

## 12.0.2 — 2024-05-09

### 🐛 Bug fixes

- [Web] Fix crash on `listenerCount` accessor. ([#28721](https://github.com/expo/expo/pull/28721) by [@aleqsio](https://github.com/aleqsio))

## 12.0.1 — 2024-04-23

_This version does not introduce any user-facing changes._

## 12.0.0 — 2024-04-18

### 💡 Others

- drop unused web `name` property. ([#27437](https://github.com/expo/expo/pull/27437) by [@EvanBacon](https://github.com/EvanBacon))
- Removed deprecated backward compatible Gradle settings. ([#28083](https://github.com/expo/expo/pull/28083) by [@kudo](https://github.com/kudo))
- Removed the usage of the legacy EventEmitter. ([#28195](https://github.com/expo/expo/pull/28195) by [@tsapeta](https://github.com/tsapeta))

## 11.7.0 — 2023-11-14

### 🛠 Breaking changes

- Bumped iOS deployment target to 13.4. ([#25063](https://github.com/expo/expo/pull/25063) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- On `Android` bump `compileSdkVersion` and `targetSdkVersion` to `34`. ([#24708](https://github.com/expo/expo/pull/24708) by [@alanjhughes](https://github.com/alanjhughes))

## 11.6.0 — 2023-10-17

### 🛠 Breaking changes

- Dropped support for Android SDK 21 and 22. ([#24201](https://github.com/expo/expo/pull/24201) by [@behenate](https://github.com/behenate))

## 11.5.0 — 2023-09-04

### 🎉 New features

- Added support for React Native 0.73. ([#24018](https://github.com/expo/expo/pull/24018) by [@kudo](https://github.com/kudo))

### 🐛 Bug fixes

- Use new `EventEmitter` instead of `NativeEventEmitter`. ([#24221](https://github.com/expo/expo/pull/24221) by [@alanjhughes](https://github.com/alanjhughes))

### 💡 Others

- Migrated Android codebase to use Expo modules API. ([#23862](https://github.com/expo/expo/pull/23862) by [@lukmccall](https://github.com/lukmccall))

## 11.4.0 — 2023-08-02

_This version does not introduce any user-facing changes._

## 11.3.0 — 2023-06-21

### 🐛 Bug fixes

- Fixed Android build warnings for Gradle version 8. ([#22537](https://github.com/expo/expo/pull/22537), [#22609](https://github.com/expo/expo/pull/22609) by [@kudo](https://github.com/kudo))

## 11.2.0 — 2023-05-08

### 🎉 New features

- Migrated iOS codebase to use Expo modules API. ([#21814](https://github.com/expo/expo/pull/21814) by [@alanjhughes](https://github.com/alanjhughes))

## 11.1.1 — 2023-02-09

_This version does not introduce any user-facing changes._

## 11.1.0 — 2023-02-03

### 🎉 New features

- Added utterance word tracking support for iOS and Android. This allows the ability to highlight each word in an utterance. ([#20726](https://github.com/expo/expo/pull/20726) by [@gabrieljoelc](https://github.com/gabrieljoelc))

### 💡 Others

- On Android bump `compileSdkVersion` and `targetSdkVersion` to `33`. ([#20721](https://github.com/expo/expo/pull/20721) by [@lukmccall](https://github.com/lukmccall))

## 11.0.0 — 2022-10-25

### 🛠 Breaking changes

- Bumped iOS deployment target to 13.0 and deprecated support for iOS 12. ([#18873](https://github.com/expo/expo/pull/18873) by [@tsapeta](https://github.com/tsapeta))

## 10.3.0 — 2022-07-07

_This version does not introduce any user-facing changes._

## 10.2.0 — 2022-04-18

### ⚠️ Notices

- On Android bump `compileSdkVersion` to `31`, `targetSdkVersion` to `31` and `Java` version to `11`. ([#16941](https://github.com/expo/expo/pull/16941) by [@bbarthec](https://github.com/bbarthec))

## 10.1.1 - 2022-02-01

### 🐛 Bug fixes

- Fix `Plugin with id 'maven' not found` build error from Android Gradle 7. ([#16080](https://github.com/expo/expo/pull/16080) by [@kudo](https://github.com/kudo))

## 10.1.0 — 2021-12-03

_This version does not introduce any user-facing changes._

## 10.0.1 — 2021-10-01

_This version does not introduce any user-facing changes._

## 10.0.0 — 2021-09-28

### 🛠 Breaking changes

- Dropped support for iOS 11.0 ([#14383](https://github.com/expo/expo/pull/14383) by [@cruzach](https://github.com/cruzach))

### 🐛 Bug fixes

- Fix setting speaking listener for projects with `react-native@>0.64.0`. ([#13654](https://github.com/expo/expo/pull/13654) by [@dsokal](https://github.com/dsokal))
- Fix empty voices list on web and allow to change voice when using `speak`. ([#4516](https://github.com/expo/expo/pull/14516) by [@Federkun](https://github.com/Federkun))
- Fix building errors from use_frameworks! in Podfile. ([#14523](https://github.com/expo/expo/pull/14523) by [@kudo](https://github.com/kudo))

### 💡 Others

- Migrated from `@unimodules/core` to `expo-modules-core`. ([#13757](https://github.com/expo/expo/pull/13757) by [@tsapeta](https://github.com/tsapeta))
- Rewritten Android code to Kotlin. ([#14008](https://github.com/expo/expo/pull/14008) by [@barthap](https://github.com/barthap))

## 9.2.0 — 2021-06-16

### 🐛 Bug fixes

- Enable kotlin in all modules. ([#12716](https://github.com/expo/expo/pull/12716) by [@wschurman](https://github.com/wschurman))

### 💡 Others

- Build Android code using Java 8 to fix Android instrumented test build error. ([#12939](https://github.com/expo/expo/pull/12939) by [@kudo](https://github.com/kudo))
- Export missing `WebVoice` type. ([#13257](https://github.com/expo/expo/pull/13257) by [@Simek](https://github.com/Simek))

## 9.1.0 — 2021-03-10

### 🎉 New features

- Updated Android build configuration to target Android 11 (added support for Android SDK 30). ([#11647](https://github.com/expo/expo/pull/11647) by [@bbarthec](https://github.com/bbarthec))

### 🐛 Bug fixes

- Remove peerDependencies and unimodulePeerDependencies from Expo modules. ([#11980](https://github.com/expo/expo/pull/11980) by [@brentvatne](https://github.com/brentvatne))

## 9.0.0 — 2021-01-15

### 🛠 Breaking changes

- Dropped support for iOS 10.0 ([#11344](https://github.com/expo/expo/pull/11344) by [@tsapeta](https://github.com/tsapeta))

## 8.5.0 — 2020-11-17

_This version does not introduce any user-facing changes._

## 8.4.0 — 2020-08-18

_This version does not introduce any user-facing changes._

## 8.3.0 — 2020-07-29

### 🎉 New features

- Added constant `Speech.maxSpeechInputLength` - returns maximum input text length for `Speech.speak()`. ([#9243](https://github.com/expo/expo/pull/9243) by [@barthap](https://github.com/barthap))

### 🐛 Bug fixes

- Fixed issue where Speech failed on Android when input text was too long. ([#9243](https://github.com/expo/expo/pull/9243) by [@barthap](https://github.com/barthap))

## 8.2.1 — 2020-05-29

_This version does not introduce any user-facing changes._

## 8.2.0 — 2020-05-27

_This version does not introduce any user-facing changes._
