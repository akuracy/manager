import controller from './telephony-line-phone-order-shipping.controller';
import template from './telephony-line-phone-order-shipping.html';

export default {
  controller,
  template,
  bindings: {
    order: '<',
    isStepLoading: '<',
  },
};
