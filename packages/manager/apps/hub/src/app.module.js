import 'script-loader!jquery'; // eslint-disable-line
import 'script-loader!moment/min/moment-with-locales.min.js'; //eslint-disable-line

import { Environment } from '@ovh-ux/manager-config';
import angular from 'angular';
import 'angular-translate';
import uiRouter, { RejectType } from '@uirouter/angularjs';
import ngOvhUiRouterLineProgress from '@ovh-ux/ng-ui-router-line-progress';
import isString from 'lodash/isString';

import 'ovh-ui-angular';
import ovhManagerCore from '@ovh-ux/manager-core';
import ovhManagerHub from '@ovh-ux/manager-hub';
import ovhManagerNavbar from '@ovh-ux/manager-navbar';
import ovhManagerOrderTracking from '@ovh-ux/ng-ovh-order-tracking';
import { detach as detachPreloader } from '@ovh-ux/manager-preloader';

import get from 'lodash/get';
import has from 'lodash/has';
import head from 'lodash/head';

import atInternet from './components/at-internet';
import errorPage from './components/error-page';
import catalog from './catalog';
import dashboard from './dashboard';

import controller from './controller';
import routing from './routing';
import './index.scss';
import 'ovh-ui-kit/dist/oui.css';

Environment.setVersion(__VERSION__);

const moduleName = 'managerHubApp';

angular
  .module(
    moduleName,
    [
      'pascalprecht.translate',
      atInternet,
      catalog,
      dashboard,
      errorPage,
      ngOvhUiRouterLineProgress,
      'pascalprecht.translate',
      'oui',
      ovhManagerCore,
      ovhManagerHub,
      ovhManagerNavbar,
      ovhManagerOrderTracking,
      'pascalprecht.translate',
      uiRouter,
      ...get(__NG_APP_INJECTIONS__, Environment.getRegion(), []),
    ].filter(isString),
  )
  .controller('HubController', controller)
  .config(
    /* @ngInject */ ($locationProvider) => $locationProvider.hashPrefix(''),
  )
  .config(routing)
  .run(
    /* @ngInject */ ($translate, $transitions) => {
      $transitions.onBefore({ to: 'app.**' }, () => $translate.refresh());
    },
  )
  .run(($translate) => {
    moment.locale(head($translate.use().split('_')));
  })
  .run(
    /* @ngInject */ ($state) => {
      $state.defaultErrorHandler((error) => {
        if (error.type === RejectType.ERROR) {
          $state.go(
            'error',
            {
              detail: {
                message: get(error.detail, 'data.message'),
                code: has(error.detail, 'headers')
                  ? error.detail.headers('x-ovh-queryId')
                  : null,
              },
            },
            { location: false },
          );
        }
      });
    },
  )
  .run(/* @ngTranslationsInject:json ./translations */)
  .run(
    /* @ngInject */ ($rootScope, $transitions) => {
      const unregisterHook = $transitions.onSuccess({}, () => {
        detachPreloader();
        unregisterHook();
      });
    },
  );

export default moduleName;
