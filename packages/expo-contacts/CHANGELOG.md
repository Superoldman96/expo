# Changelog

## Unpublished

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

### 💡 Others

## 14.2.5 - 2025-06-04

### 🐛 Bug fixes

- [Android] fixed `updateContactAsync()` removing contact rawDates / birthday ([#37054](https://github.com/expo/expo/pull/37054) by [@NorseGaud](https://github.com/NorseGaud)

### 💡 Others

- Remove "Please" from warnings and errors ([#36862](https://github.com/expo/expo/pull/36862) by [@brentvatne](https://github.com/brentvatne))

## 14.2.4 — 2025-05-08

### 🐛 Bug fixes

- Make `Contact.id` required for `updateContactAsync` ([#36603](https://github.com/expo/expo/pull/36603) by [@NorseGaud](https://github.com/NorseGaud))

## 14.2.3 — 2025-04-30

_This version does not introduce any user-facing changes._

## 14.2.2 — 2025-04-25

_This version does not introduce any user-facing changes._

## 14.2.1 — 2025-04-14

_This version does not introduce any user-facing changes._

## 14.2.0 — 2025-04-11

### 🎉 New features

- [iOS] Disambiguated `limited` permission status from `granted`. ([#35772](https://github.com/expo/expo/pull/35772) by [@clarkg](https://github.com/clarkg))

## 14.1.1 — 2025-04-09

_This version does not introduce any user-facing changes._

## 14.1.0 — 2025-04-04

- Fixed an issue on iOS where social profile urls were badly stored. ([#31771](https://github.com/expo/expo/pull/31771) by [@mlecoq](https://github.com/mlecoq))

### 🎉 New features

- added the ability to change isFavorite property of contacts on Android (using updateContactAsync) ([#34483](https://github.com/expo/expo/pull/34483) by [@NorseGaud](https://github.com/NorseGaud))
- Add `presentAccessPickerAsync` function that presents the iOS 18.0+ picker for limited contacts access. ([#33771](https://github.com/expo/expo/pull/33771) by [@tsapeta](https://github.com/tsapeta))
- [iOS] Exposed `ContactAccessButton` from SwiftUI. ([#33782](https://github.com/expo/expo/pull/33782) by [@tsapeta](https://github.com/tsapeta))

### 🐛 Bug fixes

- Fixed `the native view manager required by name (ExpoContactAccessButton) from NativeViewManagerAdapter isn't exported` warning. ([#33993](https://github.com/expo/expo/pull/33993) by [@lukmccall](https://github.com/lukmccall))

### 💡 Others

- [docs] Removed iOS platform only for the `updateContactAsync` method ([#34488](https://github.com/expo/expo/pull/34488) by [@chrfalch](https://github.com/chrfalch))
- Use the `src` folder as the Metro target. ([#33781](https://github.com/expo/expo/pull/33781) by [@tsapeta](https://github.com/tsapeta))
- [Android] Started using expo modules gradle plugin. ([#34176](https://github.com/expo/expo/pull/34176) by [@lukmccall](https://github.com/lukmccall))
- [apple] Migrate remaining `expo-module.config.json` to unified platform syntax. ([#34445](https://github.com/expo/expo/pull/34445) by [@reichhartd](https://github.com/reichhartd))
- [iOS] Fix warnings which will become errors in Swift 6. ([#35288](https://github.com/expo/expo/pull/35288) by [@behenate](https://github.com/behenate)), ([#35428](https://github.com/expo/expo/pull/35428) by [@behenate](https://github.com/behenate))
- Migrated SwiftUI views with backward compatible `WithHostingView`. ([#35553](https://github.com/expo/expo/pull/35553) by [@kudo](https://github.com/kudo))

## 14.0.5 - 2025-01-31

### 🐛 Bug fixes

- [Android] Fixed saving a contact with photos on Android. ([#34432](https://github.com/expo/expo/pull/34432) by [@chrfalch](https://github.com/chrfalch))
- Fixed corrupted contact after `updateContactAsync`. ([#34186](https://github.com/expo/expo/pull/34186) by [@freeboub](https://github.com/34186)) ([#34186](https://github.com/expo/expo/pull/34186) by [@34186](https://github.com/34186))

## 14.0.4 - 2025-01-27

### 🎉 New features

- added the ability to read and write starred property (as "isFavorite") of contacts on Android ([#33208](https://github.com/expo/expo/pull/33208) by [@NorseGaud](https://github.com/NorseGaud))

## 14.0.3 - 2025-01-10

_This version does not introduce any user-facing changes._

## 14.0.2 — 2024-11-07

### 🐛 Bug fixes

- [Android] Fix `ContactQuery` `id` field not accepting arrays. ([#32651](https://github.com/expo/expo/pull/32651) by [@behenate](https://github.com/behenate))

## 14.0.1 — 2024-10-22

_This version does not introduce any user-facing changes._

## 14.0.0 — 2024-10-22

### 🛠 Breaking changes

- Bumped iOS deployment target to 15.1. ([#30840](https://github.com/expo/expo/pull/30840) by [@tsapeta](https://github.com/tsapeta))

### 🐛 Bug fixes

- Fixed an issue on iOS with presentFormAsync where dates were not displayed. ([#31780](https://github.com/expo/expo/pull/31780) by [@mlecoq](https://github.com/mlecoq))
- Fixed an iOS issue where the contact's birthday isn't displayed when the year is set. ([#31948](https://github.com/expo/expo/pull/31948) by [@chrfalch](https://github.com/chrfalch))
- Fixed an Android issue where creating a contact with a birthday was not saved. ([#30131](https://github.com/expo/expo/issues/30131) by [@Eric013](https://github.com/Eric013))
- Fixed an issue on android where phone number and email labels were ignored on contact creation. ([#31309](https://github.com/expo/expo/pull/31309) by [@mlecoq](https://github.com/mlecoq))
- Fixed an issue where the `requestPermissionsAsync` promise throws when denying access to contacts on iOS. ([#29529](https://github.com/expo/expo/pull/29529) by [@jp1987](https://github.com/jp1987))
- Fixed an issue where the `presentFormAsync` promise doesn't resolve when the form is closed on Android. ([#29201](https://github.com/expo/expo/pull/29201) by [@jp1987](https://github.com/jp1987))
- Fixed an issue where the `presentContactPickerAsync` promise doesn't resolve when using the Android back button. ([#29202](https://github.com/expo/expo/pull/29202) by [@jp1987](https://github.com/jp1987))
- Fixed an issue where only paths of urls were stored in contacts and social profiles were only stored when all fields were filled. ([#29199](https://github.com/expo/expo/pull/29199) by [@mlecoq](https://github.com/mlecoq))
- Fixed an iOS issue where the Cancel button is not visible on the unknown contact form. ([#29555](https://github.com/expo/expo/pull/29555) by [@Tug](https://github.com/Tug))
- Add missing `react-native` peer dependencies for isolated modules. ([#30465](https://github.com/expo/expo/pull/30465) by [@byCedric](https://github.com/byCedric))

## 13.0.5 - 2024-07-22

### 💡 Others

- Handle new permission status on `iOS` 18. ([#29639](https://github.com/expo/expo/pull/29639) by [@alanjhughes](https://github.com/alanjhughes))

## 13.0.4 - 2024-06-10

_This version does not introduce any user-facing changes._

## 13.0.3 — 2024-05-01

_This version does not introduce any user-facing changes._

## 13.0.2 — 2024-04-26

_This version does not introduce any user-facing changes._

## 13.0.1 — 2024-04-23

_This version does not introduce any user-facing changes._

## 13.0.0 — 2024-04-18

### 🎉 New features

- It is now possible to select contacts using OS-provided native contact pickers. ([#27541](https://github.com/expo/expo/pull/27541) by [@fobos531](https://github.com/fobos531))

### 🐛 Bug fixes

- Fixed an issue where contacts could not be edited on either platform. ([#27703](https://github.com/expo/expo/pull/27703) by [@alanjhughes](https://github.com/alanjhughes))

### 💡 Others

- Prevent config plugin from writing permissions until prebuild. ([#28107](https://github.com/expo/expo/pull/28107) by [@EvanBacon](https://github.com/EvanBacon))
- drop unused web `name` property. ([#27437](https://github.com/expo/expo/pull/27437) by [@EvanBacon](https://github.com/EvanBacon))
- Reuse React Native `ShareOptions` type for `shareContactAsync` parameter typing. ([#26208](https://github.com/expo/expo/pull/26208) by [@Simek](https://github.com/Simek))
- [iOS] Migrate to Expo Modules. ([#25696](https://github.com/expo/expo/pull/25696) by [@alanjhughes](https://github.com/alanjhughes))
- Removed deprecated backward compatible Gradle settings. ([#28083](https://github.com/expo/expo/pull/28083) by [@kudo](https://github.com/kudo))

## 12.8.2 - 2023-12-19

_This version does not introduce any user-facing changes._

## 12.8.1 — 2023-12-13

_This version does not introduce any user-facing changes._

## 12.8.0 — 2023-12-12

_This version does not introduce any user-facing changes._

## 12.7.0 — 2023-11-14

### 🛠 Breaking changes

- Bumped iOS deployment target to 13.4. ([#25063](https://github.com/expo/expo/pull/25063) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- On `Android` bump `compileSdkVersion` and `targetSdkVersion` to `34`. ([#24708](https://github.com/expo/expo/pull/24708) by [@alanjhughes](https://github.com/alanjhughes))

### 💡 Others

- Renamed `unimodule.json` to `expo-module.config.json`. ([#25100](https://github.com/expo/expo/pull/25100) by [@reichhartd](https://github.com/reichhartd))
- Migrated codebase to use Expo Modules API. ([#24991](https://github.com/expo/expo/pull/24991) by [@lukmccall](https://github.com/lukmccall))

## 12.6.0 — 2023-10-17

### 🛠 Breaking changes

- Dropped support for Android SDK 21 and 22. ([#24201](https://github.com/expo/expo/pull/24201) by [@behenate](https://github.com/behenate))

## 12.5.1 — 2023-09-18

_This version does not introduce any user-facing changes._

## 12.5.0 — 2023-09-15

_This version does not introduce any user-facing changes._

## 12.4.0 — 2023-09-04

### 🎉 New features

- Added support for React Native 0.73. ([#24018](https://github.com/expo/expo/pull/24018) by [@kudo](https://github.com/kudo))

### 🐛 Bug fixes

- [Android] Fix `addContactAsync` failing when an e-mail or a phone number is provided with an id. ([#23877](https://github.com/expo/expo/pull/23877) by [@behenate](https://github.com/behenate))

## 12.3.1 — 2023-08-02

_This version does not introduce any user-facing changes._

## 12.3.0 — 2023-07-28

### 💡 Others

- Fork `uuid@3.4.0` and move into `expo-modules-core`. Remove the original dependency. ([#23249](https://github.com/expo/expo/pull/23249) by [@alanhughes](https://github.com/alanjhughes))

## 12.2.0 — 2023-06-21

### 🐛 Bug fixes

- Fixed Android build warnings for Gradle version 8. ([#22537](https://github.com/expo/expo/pull/22537), [#22609](https://github.com/expo/expo/pull/22609) by [@kudo](https://github.com/kudo))

## 12.1.0 — 2023-05-08

_This version does not introduce any user-facing changes._

## 12.0.1 — 2023-02-09

_This version does not introduce any user-facing changes._

## 12.0.0 — 2023-02-03

### 🛠 Breaking changes

- Remove deprecated and legacy contact fields constants. ([#20269](https://github.com/expo/expo/pull/20269) by [@Simek](https://github.com/Simek))

### 💡 Others

- Simplify exported types. ([#20269](https://github.com/expo/expo/pull/20269) by [@Simek](https://github.com/Simek))
- On Android bump `compileSdkVersion` and `targetSdkVersion` to `33`. ([#20721](https://github.com/expo/expo/pull/20721) by [@lukmccall](https://github.com/lukmccall))

## 11.0.1 — 2022-10-28

_This version does not introduce any user-facing changes._

## 11.0.0 — 2022-10-25

### 🛠 Breaking changes

- Bumped iOS deployment target to 13.0 and deprecated support for iOS 12. ([#18873](https://github.com/expo/expo/pull/18873) by [@tsapeta](https://github.com/tsapeta))

### 💡 Others

- [plugin] Migrate import from @expo/config-plugins to expo/config-plugins and @expo/config-types to expo/config. ([#18855](https://github.com/expo/expo/pull/18855) by [@brentvatne](https://github.com/brentvatne))
- Drop `@expo/config-plugins` dependency in favor of peer dependency on `expo`. ([#18595](https://github.com/expo/expo/pull/18595) by [@EvanBacon](https://github.com/EvanBacon))

## 10.3.0 — 2022-07-07

_This version does not introduce any user-facing changes._

## 10.2.0 — 2022-04-18

### 💡 Others

- Updated `@expo/config-plugins` from `4.0.2` to `4.0.14` ([#15621](https://github.com/expo/expo/pull/15621) by [@EvanBacon](https://github.com/EvanBacon))

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

- Added `AndroidManifest.xml` queries for intent handling. ([#13388](https://github.com/expo/expo/pull/13388) by [@EvanBacon](https://github.com/EvanBacon))
- `Contacts.presentFormAsync` now resolves when the native form closes. ([#13699](https://github.com/expo/expo/pull/13699) by [@dsokal](https://github.com/dsokal))
- Dropped support for iOS 11.0 ([#14383](https://github.com/expo/expo/pull/14383) by [@cruzach](https://github.com/cruzach))

### 🐛 Bug fixes

- Fixed Android intent XML parsing issues. ([#13401](https://github.com/expo/expo/pull/13401) by [@quicksnap](https://github.com/quicksnap))
- Fix building errors from use_frameworks! in Podfile. ([#14523](https://github.com/expo/expo/pull/14523) by [@kudo](https://github.com/kudo))

### 💡 Others

- Updated `@expo/config-plugins` ([#14443](https://github.com/expo/expo/pull/14443) by [@EvanBacon](https://github.com/EvanBacon))

## 9.2.0 — 2021-06-16

### 🐛 Bug fixes

- Enable kotlin in all modules. ([#12716](https://github.com/expo/expo/pull/12716) by [@wschurman](https://github.com/wschurman))
- Fix broken contacts tests (Android). ([#13076](https://github.com/expo/expo/pull/13076) by [@ajsmth](https://github.com/ajsmth))
- Switch to androidx.annotation.Nullable. ([#13133](https://github.com/expo/expo/pull/13133) by [@brentvatne](https://github.com/brentvatne))

### 💡 Others

- Migrated from `unimodules-file-system-interface` and `unimodules-permissions-interface` to `expo-modules-core`. ([#12961](https://github.com/expo/expo/pull/12961) by [@tsapeta](https://github.com/tsapeta))
- Build Android code using Java 8 to fix Android instrumented test build error. ([#12939](https://github.com/expo/expo/pull/12939) by [@kudo](https://github.com/kudo))
- Refactored uuid imports to v7 style. ([#13037](https://github.com/expo/expo/pull/13037) by [@giautm](https://github.com/giautm))

## 9.1.2 — 2021-04-13

_This version does not introduce any user-facing changes._

## 9.1.1 — 2021-03-31

_This version does not introduce any user-facing changes._

## 9.1.0 — 2021-03-10

### 🎉 New features

- Converted plugin to TypeScript. ([#11715](https://github.com/expo/expo/pull/11715) by [@EvanBacon](https://github.com/EvanBacon))
- Updated Android build configuration to target Android 11 (added support for Android SDK 30). ([#11647](https://github.com/expo/expo/pull/11647) by [@bbarthec](https://github.com/bbarthec))

### 🐛 Bug fixes

- Remove peerDependencies and unimodulePeerDependencies from Expo modules. ([#11980](https://github.com/expo/expo/pull/11980) by [@brentvatne](https://github.com/brentvatne))

## 9.0.0 — 2021-01-15

### ⚠️ Notices

- The package is now shipped with prebuilt binaries on iOS. You can read more about it on [expo.fyi/prebuilt-modules](https://expo.fyi/prebuilt-modules). ([#11224](https://github.com/expo/expo/pull/11224) by [@tsapeta](https://github.com/tsapeta))

### 🛠 Breaking changes

- Dropped support for iOS 10.0 ([#11344](https://github.com/expo/expo/pull/11344) by [@tsapeta](https://github.com/tsapeta))

### 🎉 New features

- Created config plugins ([#11538](https://github.com/expo/expo/pull/11538) by [@EvanBacon](https://github.com/EvanBacon))

## 8.6.0 — 2020-09-14

### 🐛 Bug fixes

- `getContactsAsync` no longer requires an exact match when providing the `name` query on Android. ([#10127](https://github.com/expo/expo/pull/10127) by [@cruzach](https://github.com/cruzach))

## 8.5.0 — 2020-08-18

### 🎉 New features

- Add permissions for web. ([#9671](https://github.com/expo/expo/pull/9671) by [@EvanBacon](https://github.com/EvanBacon))

## 8.4.0 — 2020-08-11

### 🎉 New features

- Added `isAvailableAsync()` method for guarding against web usage. ([#9640](https://github.com/expo/expo/pull/9640) by [@EvanBacon](https://github.com/evanbacon))

### 🐛 Bug fixes

- Fixed bug, where sorting contacts by `firstName` or `lastName` could cause crash on Android. ([#9582](https://github.com/expo/expo/pull/9582) by [@barthap](https://github.com/barthap))

## 8.3.0 — 2020-07-27

### 🐛 Bug fixes

- Fixed `getContactById` not resolving promise when contact with provided id doesn't exist on Android. ([#8976](https://github.com/expo/expo/pull/8976) by [@lukmccall](https://github.com/lukmccall))
- Fixed `addContactAsync` returning incorrect id on Android. ([#8980](https://github.com/expo/expo/pull/8980) by [@lukmccall](https://github.com/lukmccall))
- Fixed `updateContactAsync` creating a new contact on Android. ([#9031](https://github.com/expo/expo/pull/9031) by [@lukmccall](https://github.com/lukmccall))
- Fixed `updateContactAsync` not returning a contact id on iOS. ([#9031](https://github.com/expo/expo/pull/9031) by [@lukmccall](https://github.com/lukmccall))

## 8.2.1 — 2020-05-29

_This version does not introduce any user-facing changes._

## 8.2.0 — 2020-05-27

### 🐛 Bug fixes

- Fix `Contacts.presentFormAsync` pre-filling. ([#7285](https://github.com/expo/expo/pull/7285) by [@abdelilah](https://github.com/abdelilah) & [@lukmccall](https://github.com/lukmccall))
