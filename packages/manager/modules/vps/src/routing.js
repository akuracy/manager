import kebabCase from 'lodash/kebabCase';

import template from './vps.html';

import {
  FEATURE_CLOUDDATABASE,
  NEW_RANGE_VERSION,
  PRODUCT_NAME,
} from './constants';

import { DASHBOARD_FEATURES } from './dashboard/vps-dashboard.constants';

import detailComponent from './detail/vps-detail.component';
import headerComponent from './header/vps-header.component';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider
    .state('vps', {
      url: '/iaas/vps',
      template,
      abstract: true,
      resolve: {
        currentUser: /* @ngInject */ (OvhApiMe) => OvhApiMe.v6().get().$promise,
      },
      translations: {
        value: ['../common', '../vps'],
        format: 'json',
      },
    })
    .state('vps.detail', {
      url: '/{serviceName}',
      redirectTo: 'vps.detail.dashboard',
      resolve: {
        connectedUser: /* @ngInject */ (OvhApiMe) =>
          OvhApiMe.v6().get().$promise,
        capabilities: /* @ngInject */ (
          coreConfig,
          isVpsNewRange,
          serviceName,
          OvhApiVpsCapabilities,
        ) =>
          OvhApiVpsCapabilities.Aapi()
            .query({ serviceName })
            .$promise.then((capabilities) =>
              capabilities
                .filter((capability) =>
                  !isVpsNewRange && coreConfig.isRegion('US')
                    ? capability === DASHBOARD_FEATURES.rebuild
                    : true,
                )
                .map((capability) => kebabCase(capability)),
            ),
        hasCloudDatabaseFeature: /* @ngInject */ (
          CucFeatureAvailabilityService,
        ) =>
          CucFeatureAvailabilityService.hasFeaturePromise(
            PRODUCT_NAME,
            FEATURE_CLOUDDATABASE,
          ),
        isVpsNewRange: /* @ngInject */ (stateVps) =>
          stateVps.model.version === NEW_RANGE_VERSION,
        plan: /* @ngInject */ (serviceName, VpsService) =>
          VpsService.getServiceInfos(serviceName).then((plan) => ({
            ...plan,
            creation: moment(plan.creation).format('LL'),
            expiration: moment(plan.expiration).format('LL'),
          })),
        serviceName: /* @ngInject */ ($transition$) =>
          $transition$.params().serviceName,
        stateVps: /* @ngInject */ ($q, serviceName, OvhApiVps) =>
          OvhApiVps.v6()
            .get({
              serviceName,
            })
            .$promise.then((stateVps) =>
              OvhApiVps.v6()
                .version({
                  serviceName,
                })
                .$promise.then((response) => {
                  const vpsState = stateVps;
                  vpsState.isLegacy = response.version !== 2;
                  return vpsState;
                }),
            )
            .catch((error) => {
              if (error.status === 404) {
                return $q.reject(error);
              }
              return true;
            }),
        tabSummary: /* @ngInject */ (serviceName, VpsService) => {
          const forceRefresh = true;
          return VpsService.getTabSummary(serviceName, forceRefresh);
        },
        vps: /* @ngInject */ (serviceName, VpsService) =>
          VpsService.getSelectedVps(serviceName),
      },
      views: {
        'vpsHeader@vps': {
          component: headerComponent.name,
        },
        'vpsContainer@vps': {
          component: detailComponent.name,
        },
      },
    });
};
