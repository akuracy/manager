import chunk from 'lodash/chunk';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';

import initializeBrandList from './telephony-line-phone-accessories-choice.service';

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
    angular.forEach(this.process.accessoriesList, (accessory) => {
      if (accessory.name === accessoryName) {
        total += accessory.price.value * quantity;
      } else {
        total += accessory.price.value * accessory.quantity;
      }

      if (quantity === 5 || accessory.quantity === 5) {
        this.maxQuantity = true;
      } else {
        this.maxQuantity = false;
      }
    });

    this.orderTotal = this.TucTelephonyAccessoriesOrderProcess.getPriceStruct(
      total,
    );

    return this.orderTotal;
  }

  filterByBrand(brand) {
    const listFiltered = [];
    if ('all'.includes(brand.toLowerCase())) {
      this.accessoriesDisplayed = this.process.accessoriesList;
    } else {
      this.process.accessoriesList.forEach((offer) => {
        if (offer.name.includes(brand.toLowerCase())) {
          listFiltered.push(offer);
        }
      });
      this.accessoriesDisplayed = listFiltered;
    }
  }

  validateStep() {
    this.process.currentView = 'shipping';
  }

  sortPriceAsc() {
    this.accessoriesDisplayed = sortBy(
      this.process.accessoriesList,
      'price.value',
    );
  }

  sortPriceDesc() {
    this.accessoriesDisplayed = sortBy(
      this.process.accessoriesList,
      'price.value',
    ).reverse();
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
