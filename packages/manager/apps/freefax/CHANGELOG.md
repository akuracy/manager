## [5.0.4](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@5.0.3...@ovh-ux/manager-freefax-app@5.0.4) (2020-03-18)


### Bug Fixes

* **deps:** use latest for @ovh-ux/manager-core ([#2394](https://github.com/ovh/manager/issues/2394)) ([df1a12b](https://github.com/ovh/manager/commit/df1a12bc132cebb55f0a70a317e406ee78574faa))



## [5.0.3](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@5.0.2...@ovh-ux/manager-freefax-app@5.0.3) (2020-03-04)


### Bug Fixes

* **deps:** use latest for @ovh-ux/manager-core ([#2394](https://github.com/ovh/manager/issues/2394)) ([fd0a25b](https://github.com/ovh/manager/commit/fd0a25b11bd5119649daf3b1605bb56bf70f3ff9))



## [5.0.2](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@5.0.1...@ovh-ux/manager-freefax-app@5.0.2) (2019-11-22)


### Bug Fixes

* **deps:** upgrade ovh-api-services to v9.27.1 ([fb116c4](https://github.com/ovh/manager/commit/fb116c4a0e9085c71e8fe1266b818f3464e5bc94))



## [5.0.1](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@5.0.0...@ovh-ux/manager-freefax-app@5.0.1) (2019-11-15)


### Bug Fixes

* **deps:** upgrade ovh-api-services to v9.26.0 ([#1789](https://github.com/ovh/manager/issues/1789)) ([90361dc](https://github.com/ovh/manager/commit/90361dc945014853db1cf4535e2d5b89b67efbea))



# [5.0.0](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@4.2.3...@ovh-ux/manager-freefax-app@5.0.0) (2019-11-13)


### Code Refactoring

* rename `ng-uirouter-title` to `ng-ui-router-title` ([a7631fa](https://github.com/ovh/manager/commit/a7631fac619f9052cac9ab7770bc31b8631b8285))


### BREAKING CHANGES

* module is now named as `ngUiRouterTitle

Signed-off-by: Antoine Leblanc <antoine.leblanc@corp.ovh.com>



## [4.2.3](https://github.com/ovh/manager/compare/@ovh-ux/manager-freefax-app@4.2.2...@ovh-ux/manager-freefax-app@4.2.3) (2019-10-25)


### Bug Fixes

* bump ovh-ui-angular to v3.9.9 ([#1593](https://github.com/ovh/manager/issues/1593)) ([2ff2f81](https://github.com/ovh/manager/commit/2ff2f813f43453744c5927efc5687a7bb79674e1))



## [4.2.2](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@4.2.1...@ovh-ux/manager-freefax-app@4.2.2) (2019-09-03)


### Bug Fixes

* fix version for tuc ([836fed6](https://github.com/ovh-ux/manager/commit/836fed6))



## [4.2.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@4.2.0...@ovh-ux/manager-freefax-app@4.2.1) (2019-08-29)


### Bug Fixes

* **deps:** bump ovh-ui-angular to v3.7.4 ([#1245](https://github.com/ovh-ux/manager/issues/1245)) ([33ba95c](https://github.com/ovh-ux/manager/commit/33ba95c))



# [4.2.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@4.1.0...@ovh-ux/manager-freefax-app@4.2.0) (2019-08-26)


### Features

* manage incomplete nic ([#1197](https://github.com/ovh-ux/manager/issues/1197)) ([bdce016](https://github.com/ovh-ux/manager/commit/bdce016))



# [4.1.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@4.0.1...@ovh-ux/manager-freefax-app@4.1.0) (2019-08-12)


### Features

* add @ovh-ux/manager-web ([09d208c](https://github.com/ovh-ux/manager/commit/09d208c))
* **core:** add request-tagger interceptor ([e797d9d](https://github.com/ovh-ux/manager/commit/e797d9d))



## [4.0.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@4.0.0...@ovh-ux/manager-freefax-app@4.0.1) (2019-05-13)


### Bug Fixes

* **deps:** upgrade ng-ovh-telecom-universe-components to v3.0.3 ([574ff83](https://github.com/ovh-ux/manager/commit/574ff83))



# [4.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@3.0.0...@ovh-ux/manager-freefax-app@4.0.0) (2019-03-19)


### Code Refactoring

* bump all packages to [@ovh-ux](https://github.com/ovh-ux)/manager-core@^5.0.0 ([7cbc70a](https://github.com/ovh-ux/manager/commit/7cbc70a))


### BREAKING CHANGES

* Until theses packages has a dependency to @ovh-ux/manager-core@^5.0.0, the host project needs to import @ovh-ux/manager-config

Before:

yarn add @ovh-ux/manager-core

Now:

yarn add @ovh-ux/manager-config
yarn add @ovh-ux/manager-core



# [3.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@2.0.0...@ovh-ux/manager-freefax-app@3.0.0) (2019-03-13)


### Build System

* **deps:** upgrade dependencies ([#252](https://github.com/ovh-ux/manager/issues/252)) ([f87f7b7](https://github.com/ovh-ux/manager/commit/f87f7b7))


### BREAKING CHANGES

* **deps:** replace both `@ovh-ux/ng-ovh-apiv7` and `ovh-angular-swimming-poll` by `@ovh-ux/ng-ovh-api-wrappers` and `@ovh-ux/ng-ovh-swimming-poll`



# [2.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@1.0.0...@ovh-ux/manager-freefax-app@2.0.0) (2019-02-26)


### Build System

* **deps:** upgrade ng-ovh-apiv7 to v2.0.0 ([ac6ac62](https://github.com/ovh-ux/manager/commit/ac6ac62))


### BREAKING CHANGES

* **deps:** replace `ovh-angular-apiv7` by `@ovh-ux/ng-ovh-apiv7`



# [1.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@0.0.3...@ovh-ux/manager-freefax-app@1.0.0) (2019-01-29)


### Build System

* **deps:** upgrade ng-ovh-http to v4.0.1-beta.0 ([b2e4388](https://github.com/ovh-ux/manager/commit/b2e4388))
* **deps:** upgrade ng-ovh-sso-auth to v4.0.0-beta.0 ([8acac96](https://github.com/ovh-ux/manager/commit/8acac96))
* **deps:** upgrade ng-ovh-telecom-universe-components to v2.0.1 ([3ffc516](https://github.com/ovh-ux/manager/commit/3ffc516))


### BREAKING CHANGES

* **deps:** replace `@ovh-ux/telecom-universe-components` by `@ovh-ux/ng-ovh-telecom-universe-components`
* **deps:** replace `ovh-angular-sso-auth` by `@ovh-ux/ng-ovh-sso-auth`
* **deps:** replace `ovh-angular-http` by `@ovh-ux/ng-ovh-http`



## [0.0.3](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@0.0.2...@ovh-ux/manager-freefax-app@0.0.3) (2019-01-21)


### Bug Fixes

* **telecom-styles:** fix elements using rem ([00c5425](https://github.com/ovh-ux/manager/commit/00c5425))



## [0.0.2](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@0.0.1...@ovh-ux/manager-freefax-app@0.0.2) (2019-01-17)


### Bug Fixes

* use new component to display contracts ([f0e0a1b](https://github.com/ovh-ux/manager/commit/f0e0a1b))



## [0.0.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-freefax-app@0.0.0...@ovh-ux/manager-freefax-app@0.0.1) (2019-01-10)



