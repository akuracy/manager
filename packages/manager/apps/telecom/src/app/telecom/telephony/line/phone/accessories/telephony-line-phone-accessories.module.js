import component from './telephony-line-phone-accessories.component';
import routing from './telephony-line-phone-accessories.routing';
import choice from './choice/telephony-line-phone-accessories-choice.component';
import finalize from './finalize/telephony-line-phone-accessories-finalize.component';
import resume from './resume/telephony-line-phone-accessories-resume.component';
import shipping from './shipping/telephony-line-phone-accessories-shipping.component';

angular
  .module('managerApp')
  .component('telephonyLinePhoneAccessories', component)
  .component('telephonyLinePhoneAccessoriesChoice', choice)
  .component('telephonyLinePhoneAccessoriesFinalize', finalize)
  .component('telephonyLinePhoneAccessoriesResume', resume)
  .component('telephonyLinePhoneAccessoriesShipping', shipping)
  .config(routing);
