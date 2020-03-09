import isEqual from 'lodash/isEqual';
import remove from 'lodash/remove';

export default class TelecomTelephonyLinePhoneAccessoriesResumeCtrl {
  /* @ngInject */
  constructor($q, TucTelephonyAccessoriesOrderProcess) {
    this.$q = $q;
    this.TucTelephonyAccessoriesOrderProcess = TucTelephonyAccessoriesOrderProcess;
  }

  $onInit() {
    this.process = null;
    this.order = null;
    this.error = null;
    this.model = {
      contracts: false,
      retract: null,
    };
    this.loading = {
      init: false,
    };

    this.init();
  }

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  init() {
    this.loading.init = true;
    this.process = this.TucTelephonyAccessoriesOrderProcess.getOrderProcess();

    return this.TucTelephonyAccessoriesOrderProcess.getOrderCheckout()
      .then(
        (order) => {
          remove(
            order.details,
            (detail) =>
              ['SPECIAL', 'MUTE'].indexOf(detail.detailType) > -1 ||
              (isEqual(detail.detailType, 'DELIVERY') &&
                detail.totalPrice.value === 0),
          );

          this.order = order;
        },
        (error) => {
          this.error = error;
          return this.$q.reject(error);
        },
      )
      .finally(() => {
        this.loading.init = false;
      });
  }

  /* -----  End of INITIALIZATION  ------*/
}
