import component from './telephony-line-phone-attach.component';
import routing from './telephony-line-phone-attach.routing';

angular
  .module('managerApp')
  .component('telephonyLinePhoneAttach', component)
  .config(routing);
