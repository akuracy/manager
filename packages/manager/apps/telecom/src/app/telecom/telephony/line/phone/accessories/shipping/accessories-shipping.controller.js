import forEach from 'lodash/forEach';
import sumBy from 'lodash/sumBy';

import filterContact from './accessories-shipping.service';

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

    this.loading.init = true;
    this.process = this.TucTelephonyAccessoriesOrderProcess.getOrderProcess();
    let shippingPrice = 0;

    // shipping mode selection options
    this.shippingOptions.disableMondialRelay =
      this.getTotalAccessoriesQuantity() > 1;

    // contact options
    this.contactDeferred.promise.then(() =>
      this.TucTelephonyAccessoriesOrderProcess.getOrderCheckout()
        .then((order) => {
          shippingPrice = sumBy(order.details, (detail) => {
            if (detail.detailType === 'DELIVERY') {
              return detail.totalPrice.value;
            }
            return 0;
          });
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

  getTotalAccessoriesQuantity() {
    let totalQty = 0;
    forEach(this.process.accessoriesList, (accessory) => {
      totalQty += accessory.quantity;
    });
    return totalQty;
  }

  /* -----  End of HELPERS  ------*/

  /*= ==============================
    =            ACTIONS           =
    ================================ */

  onShippingModeInitialized() {
    this.loading.init = false;
  }
}
