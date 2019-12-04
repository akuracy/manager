import controller from './form.controller';
import template from './form.html';

export default {
  name: 'signUpFormView',
  controller,
  template,
  bindings: {
    me: '<',
    isActiveStep: '<',
    onStepCancel: '<',
    onStepFocus: '<',
    finishSignUp: '<',
    trackBlurredFieldInError: '<',
  },
};
