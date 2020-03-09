import controller from './telephony-line-phone-order-summary.controller';
import template from './telephony-line-phone-order-summary.html';

export default {
  controller,
  template,
  bindings: {
    order: '<',
    isStepLoading: '<',
  },
};
