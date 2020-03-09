import assign from 'lodash/assign';

export default class TelephonyLinePhoneAccessoriesCtrl {
  /* @ngInject */
  constructor(
    $q,
    $translate,
    atInternet,
    OvhApiTelephony,
    TelephonyMediator,
    TucTelephonyAccessoriesOrderProcess,
    TucToast,
  ) {
    this.$q = $q;
    this.$translate = $translate;
    this.atInternet = atInternet;
    this.OvhApiTelephony = OvhApiTelephony;
    this.TelephonyMediator = TelephonyMediator;
    this.TucTelephonyAccessoriesOrderProcess = TucTelephonyAccessoriesOrderProcess;
    this.TucToast = TucToast;
  }

  $onInit() {
    this.process = null;
    this.loading = {
      init: false,
    };
    this.line = null;

    this.loading.init = true;
    this.TelephonyMediator.getGroup(this.billingAccount)
      .then((group) => {
        this.line = group.getLine(this.serviceName);
      })
      .then(() =>
        this.OvhApiTelephony.Line()
          .v6()
          .get({
            billingAccount: this.line.billingAccount,
            serviceName: this.line.serviceName,
          })
          .$promise.then((result) => {
            assign(
              this.line,
              { getPublicOffer: result.getPublicOffer },
              {
                isAttachedToOtherLinesPhone: result.isAttachedToOtherLinesPhone,
              },
            );
          }),
      )
      .then(() => this.line.hasPendingOfferTasks())
      .then(() => {
        return this.line.getPhone();
      })
      .then((phone) => {
        this.phone = phone;
      })
      .catch((err) => this.TucToast.error(err))
      .finally(() => {
        this.loading.init = false;
      });

    this.init();
  }

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  init() {
    this.loading.init = true;

    return this.TelephonyMediator.getGroup(this.billingAccount)
      .then(
        () => {
          this.process = this.TucTelephonyAccessoriesOrderProcess.init(
            this.billingAccount,
          );
        },
        (error) => {
          this.TucToast.error(
            [
              this.$translate.instant(
                'telephony_line_phone_accessories_load_error',
              ),
              (error.data && error.data.message) || '',
            ].join(' '),
          );
          return this.$q.error(error);
        },
      )
      .finally(() => {
        this.loading.init = false;
        return this.atInternet.trackPage({
          name: 'accessories-Tel',
          type: 'navigation',
          level2: 'Telecom',
          chapter1: 'telecom',
        });
      });
  }
  /* -----  End of INITIALIZATION  ------*/
}
