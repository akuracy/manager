import template from './telephony-line-phone-order-choice.html';
import controller from './telephony-line-phone-order-choice.controller';

export default {
  controller,
  template,
  bindings: {
    serviceName: '<',
    billingAccount: '<',
    line: '<',
    isStepLoading: '<',
    phone: '<',
  },
};
