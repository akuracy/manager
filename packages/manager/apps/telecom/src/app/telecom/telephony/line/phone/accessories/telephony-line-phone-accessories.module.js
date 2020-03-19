import angular from 'angular';

import ngTranslateAsyncLoader from '@ovh-ux/ng-translate-async-loader';
import uiRouter from '@uirouter/angularjs';
import angularTranslate from 'angular-translate';
import 'ovh-ui-angular';

import choice from './choice';
import finalize from './finalize';
import resume from './resume';
import shipping from './shipping';

import component from './telephony-line-phone-accessories.component';
import routing from './telephony-line-phone-accessories.routing';

const moduleName = 'ovhTelecomLinePhoneAccessories';

angular
  .module(moduleName, [
    ngTranslateAsyncLoader,
    uiRouter,
    angularTranslate,
    'oui',
    choice,
    finalize,
    resume,
    shipping,
  ])
  .component('telephonyLinePhoneAccessories', component)
  .config(routing);

export default moduleName;
