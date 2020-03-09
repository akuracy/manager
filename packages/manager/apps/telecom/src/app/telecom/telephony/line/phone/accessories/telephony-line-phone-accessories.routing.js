export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.phone.accessories',
    {
      url: '/accessories',
      views: {
        'lineView@telecom.telephony.billingAccount.line':
          'telephonyLinePhoneAccessories',
      },
      resolve: {
        billingAccount: /* @ngInject */ ($transition$) =>
          $transition$.params().billingAccount,
        serviceName: /* @ngInject */ ($transition$) =>
          $transition$.params().serviceName,
      },
      translations: { value: ['.'], format: 'json' },
    },
  );
};
