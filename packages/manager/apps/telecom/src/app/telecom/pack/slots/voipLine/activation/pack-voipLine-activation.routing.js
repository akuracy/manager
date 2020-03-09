export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telecom.packs.pack.voipLine-activation', {
    url: '/telephony/activation',
    views: {
      'packView@telecom.packs': 'packVoipLineActivation',
    },
    resolve: {
      packName: /* @ngInject */ ($transition$) =>
        $transition$.params().packName,
    },
    translations: { value: ['.'], format: 'json' },
  });
};
