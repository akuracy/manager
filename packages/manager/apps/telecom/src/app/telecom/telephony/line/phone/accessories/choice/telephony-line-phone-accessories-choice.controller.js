import chunk from 'lodash/chunk';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import orderBy from 'lodash/orderBy';

import initializeBrandList from './telephony-line-phone-accessories-choice.service';

import { MAX_QUANTITY } from './telephony-line-phone-accessories-choice.constant';

export default class TelecomTelephonyLinePhoneAccessoriesChoiceCtrl {
  /* @ngInject */
  constructor($q, $translate, TucTelephonyAccessoriesOrderProcess) {
    this.$q = $q;
    this.$translate = $translate;
    this.TucTelephonyAccessoriesOrderProcess = TucTelephonyAccessoriesOrderProcess;
  }

  $onInit() {
    this.process = null;
    this.orderTotal = null;

    this.loading = {
      init: false,
    };

    this.error = {
      loading: null,
    };

    this.accessoryToOrder = null;
    this.selectedAccessory = null;

    this.spinnerExtremities = {
      min: 0,
      max: 5,
    };

    this.init();
  }

  init() {
    this.loading.init = true;

    return this.TucTelephonyAccessoriesOrderProcess.getAvailableAccessories()
      .then(
        (orderProcess) => {
          this.process = orderProcess;
          this.brandList = initializeBrandList(this.process.accessoriesList);
          this.accessoriesDisplayed = this.process.accessoriesList;
          this.chunkedList = chunk(this.process.accessoriesList, 4);
          this.orderTotal = this.TucTelephonyAccessoriesOrderProcess.getPriceStruct(
            0,
          );
        },
        (error) => {
          this.error.loading = error;
          return this.$q.reject(error);
        },
      )
      .finally(() => {
        this.loading.init = false;
      });
  }

  hasAtLeastOneAccessory() {
    return !!find(
      this.process.accessoriesList,
      (accessory) => accessory.quantity > 0,
    );
  }

  updateOrderTotal(quantity, accessoryName) {
    let total = 0;
    forEach(this.process.accessoriesList, (accessory) => {
      if (accessory.name === accessoryName) {
        total += accessory.price.value * quantity;
      } else {
        total += accessory.price.value * accessory.quantity;
      }

      this.maxQuantity =
        quantity === MAX_QUANTITY || accessory.quantity === MAX_QUANTITY;
    });

    this.orderTotal = this.TucTelephonyAccessoriesOrderProcess.getPriceStruct(
      total,
    );

    return this.orderTotal;
  }

  filterByBrand(brand) {
    if ('all'.includes(brand.toLowerCase())) {
      this.accessoriesDisplayed = this.process.accessoriesList;
    } else {
      this.accessoriesDisplayed = this.process.accessoriesList.filter((offer) =>
        offer.name.includes(brand.toLowerCase()),
      );
    }
  }

  validateStep() {
    this.process.currentView = 'shipping';
  }

  sortPriceAsc() {
    this.accessoriesDisplayed = orderBy(
      this.process.accessoriesList,
      'price.value',
      'asc',
    );
  }

  sortPriceDesc() {
    this.accessoriesDisplayed = orderBy(
      this.process.accessoriesList,
      'price.value',
      'desc',
    );
  }

  filterWithPhone() {
    let { brand } = this.phone;
    if (brand.includes('phone.')) {
      brand = brand.replace(/phone./, '');
    }

    // Force reinit for the accessories list
    this.process.accessoriesList = null;

    return this.TucTelephonyAccessoriesOrderProcess.getAvailableAccessoriesCompatible(
      brand,
    )
      .then(
        (orderProcess) => {
          this.process = orderProcess;
          this.brandList = initializeBrandList(orderProcess.accessoriesList);
          this.accessoriesDisplayed = orderProcess.accessoriesList;
          this.orderTotal = this.TucTelephonyAccessoriesOrderProcess.getPriceStruct(
            0,
          );
        },
        (error) => {
          this.error.loading = error;
          return this.$q.reject(error);
        },
      )
      .finally(() => {
        this.loading.init = false;
      });
  }

  filterAll() {
    // Force reinit for the accessories list
    this.process.accessoriesList = null;

    this.init();
  }

  selectAccessory() {
    this.selectedAccessory = this.accessoryToOrder;
  }
}
