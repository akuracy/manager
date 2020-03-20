import controller from './order.controller';
import template from './order.html';

export default {
  bindings: {
    billingAccount: '<',
    serviceName: '<',
  },
  controller,
  template,
};
