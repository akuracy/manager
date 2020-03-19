import angular from 'angular';

import ngTranslateAsyncLoader from '@ovh-ux/ng-translate-async-loader';
import uiRouter from '@uirouter/angularjs';
import angularTranslate from 'angular-translate';
import 'ovh-ui-angular';

import resume from './telephony-line-phone-accessories-resume.component';

const moduleName = 'ovhTelecomLinePhoneAccessoriesResume';

angular
  .module(moduleName, [
    ngTranslateAsyncLoader,
    uiRouter,
    angularTranslate,
    'oui',
  ])
  .component('telephonyLinePhoneAccessoriesResume', resume);

export default moduleName;
