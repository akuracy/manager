import controller from './telephony-line-phone-attach.controller';
import template from './telephony-line-phone-attach.html';

export default {
  bindings: {
    billingAccount: '<',
    serviceName: '<',
  },
  controller,
  template,
};
