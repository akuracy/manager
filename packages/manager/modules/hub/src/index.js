import angular from 'angular';

import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-payment-method';
import '@uirouter/angularjs';
import 'angular-translate';

import billingSummary from './components/billing-summary';
import ovhManagerHubCarousel from './components/carousel';
import ovhManagerHubCatalogItems from './components/catalog-items';
import ovhManagerHubOrderTracking from './components/order-tracking';
import ovhManagerHubPaymentStatusTile from './components/payment-status-tile';
import ovhManagerHubProducts from './components/products';
import ovhManagerHubProductList from './components/product-list';
import ovhManagerHubSupport from './components/support';
import ovhManagerHubTile from './components/tile';
import userPanel from './components/user-panel';

const moduleName = 'ovhManagerHub';

angular.module(moduleName, [
  billingSummary,
  'ovhManagerCore',
  'pascalprecht.translate',
  'ui.router',
  ovhManagerHubCarousel,
  ovhManagerHubCatalogItems,
  ovhManagerHubOrderTracking,
  ovhManagerHubPaymentStatusTile,
  ovhManagerHubProducts,
  ovhManagerHubProductList,
  ovhManagerHubSupport,
  ovhManagerHubTile,
  userPanel,
]);

export default moduleName;
