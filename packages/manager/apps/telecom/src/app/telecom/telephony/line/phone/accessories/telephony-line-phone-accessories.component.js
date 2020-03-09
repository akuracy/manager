import controller from './telephony-line-phone-accessories.controller';
import template from './telephony-line-phone-accessories.html';

export default {
  controller,
  template,
  bindings: {
    billingAccount: '<',
    serviceName: '<',
  },
};
