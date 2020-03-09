import controller from './telephony-line-phone-order.controller';
import template from './telephony-line-phone-order.html';

export default {
  bindings: {
    billingAccount: '<',
    serviceName: '<',
  },
  controller,
  template,
};
