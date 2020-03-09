import controller from './telephony-line-phone-order-rma.controller';
import template from './telephony-line-phone-order-rma.html';

export default {
  controller,
  template,
  bindings: {
    order: '<',
    returnSuccess: '<',
    rmas: '<',
  },
};
