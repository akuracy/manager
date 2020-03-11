import angular from 'angular';

import ngTranslateAsyncLoader from '@ovh-ux/ng-translate-async-loader';
import uiRouter from '@uirouter/angularjs';
import angularTranslate from 'angular-translate';
import 'ovh-ui-angular';

import component from './telephony-line-phone-order.component';
import routing from './telephony-line-phone-order.routing';
import choice from './choice/telephony-line-phone-order-choice.component';
import shipping from './shipping/telephony-line-phone-order-shipping.component';
import summary from './summary/telephony-line-phone-order-summary.component';
import rma from './rma/telephony-line-phone-order-rma.component';

const moduleName = 'ovhTelecomLinePhoneOrder';

angular
  .module(moduleName, [
    ngTranslateAsyncLoader,
    uiRouter,
    angularTranslate,
    'oui',
  ])
  .component('telephonyLinePhoneOrder', component)
  .component('linePhoneOrderChoice', choice)
  .component('linePhoneOrderShipping', shipping)
  .component('linePhoneOrderSummary', summary)
  .component('linePhoneOrderRma', rma)
  .config(routing);

export default moduleName;
