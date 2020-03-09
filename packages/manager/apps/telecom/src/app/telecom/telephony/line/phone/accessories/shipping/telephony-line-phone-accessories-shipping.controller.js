import each from 'lodash/each';
import filter from 'lodash/filter';

import filterContact from './telephony-line-phone-accessories-shipping.service';

export default class TelecomTelephonyLinePhoneAccessoriesShippingCtrl {
  /* @ngInject */
  constructor($q, TucTelephonyAccessoriesOrderProcess) {
    this.$q = $q;
    this.TucTelephonyAccessoriesOrderProcess = TucTelephonyAccessoriesOrderProcess;
  }

  $onInit() {
    this.process = null;
    this.loading = {
      init: false,
    };
    this.shippingOptions = {
      forceContactSelect: true,
      payForRelay: true,
    };
    this.contactChoiceOptions = null;
    this.contactDeferred = this.$q.defer();

    this.init();
  }

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  init() {
    this.loading.init = true;
    this.process = this.TucTelephonyAccessoriesOrderProcess.getOrderProcess();
    this.initComponentsOptions();
  }

  /* -----  End of INITIALIZATION  ------*/

  getTotalAccessoriesQuantity() {
    let totalQty = 0;
    angular.forEach(this.process.accessoriesList, (accessory) => {
      totalQty += accessory.quantity;
    });
    return totalQty;
  }

  initComponentsOptions() {
    let shippingPrice = 0;

    // shipping mode selection options
    this.shippingOptions.disableMondialRelay =
      this.getTotalAccessoriesQuantity() > 1;

    // contact options
    this.contactDeferred.promise.then(() =>
      this.TucTelephonyAccessoriesOrderProcess.getOrderCheckout()
        .then((order) => {
          each(
            filter(order.details, {
              detailType: 'DELIVERY',
            }),
            (detail) => {
              shippingPrice += detail.totalPrice.value;
            },
          );

          this.shippingOptions.shippingPrice = shippingPrice;
        })
        .finally(() => {
          this.loading.init = false;
        }),
    );
    this.contactChoiceOptions = {
      filter: filterContact,
    };
  }

  /* -----  End of HELPERS  ------*/

  /*= ==============================
    =            ACTIONS           =
    ================================ */

  onShippingModeInitialized() {
    this.loading.init = false;
  }
}
