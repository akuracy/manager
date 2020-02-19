export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telecom.telephony.billingAccount.line.phone.attach', {
    url: '/attach',
    views: {
      'lineView@telecom.telephony.billingAccount.line':
        'telephonyLinePhoneOrderAttach',
    },
    resolve: {
      billingAccount: /* @ngInject */ ($transition$) =>
        $transition$.params().billingAccount,
      serviceName: /* @ngInject */ ($transition$) =>
        $transition$.params().serviceName,
    },
    translations: { value: ['..', '.'], format: 'json' },
  });
};
