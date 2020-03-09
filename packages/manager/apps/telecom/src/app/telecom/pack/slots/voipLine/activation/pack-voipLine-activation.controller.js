import find from 'lodash/find';
import flatten from 'lodash/flatten';
import head from 'lodash/head';
import isArray from 'lodash/isArray';
import map from 'lodash/map';
import remove from 'lodash/remove';
import set from 'lodash/set';
import sortBy from 'lodash/sortBy';
import sum from 'lodash/sum';

import {
  buildFramedObject,
  removeDuplicateAddress,
} from './pack-voipLine-activation.service';

export default class PackVoipLineActivationCtrl {
  /* @ngInject */
  constructor(
    $scope,
    $q,
    $translate,
    costs,
    OvhApiPackXdsl,
    OvhApiPackXdslVoipLine,
    TucToastError,
  ) {
    this.$scope = $scope;
    this.OvhApiPackXdsl = OvhApiPackXdsl;
    this.OvhApiPackXdslVoipLine = OvhApiPackXdslVoipLine;
    this.costs = costs;
    this.$q = $q;
    this.$translate = $translate;
    this.TucToastError = TucToastError;
  }

  $onInit() {
    this.transporterCost = this.costs.voip.shipping.transporter.value;
    this.canUncheckOrderablePhones = true;

    this.isFirstSelect = true;

    this.init();
  }

  /**
   * Build the select object
   * @param {Integer} count Number of available slots
   */
  buildSlotCount(count) {
    if (count > 1) {
      this.orderCountSelect.push({
        value: 0,
        label: this.$translate.instant(
          'telephony_activation_select_number_of_lines',
        ),
      });
    }

    for (let j = 0; j < count; j += 1) {
      this.orderCountSelect.push({
        value: j + 1,
        label: j + 1,
      });
    }

    if (this.orderCountSelect.length === 1) {
      this.setOrderCount(1, true);
    } else {
      this.setOrderCount(0, true);
    }
  }

  /**
   * Load lines and hardware data
   * @param {Integer} id Pack id
   * @returns {Promise}
   */
  loadData(id) {
    this.loading = true;
    return this.$q
      .all([
        this.OvhApiPackXdsl.v6().getServices({
          packId: id,
        }).$promise,
        this.OvhApiPackXdslVoipLine.v6().getHardwares({
          packId: id,
        }).$promise,
        this.OvhApiPackXdslVoipLine.v6().getShippingAddresses({
          packId: id,
        }).$promise,
      ])
      .finally(() => {
        this.loading = false;
      });
  }

  /**
   * Check if the user still can uncheck the orderable phones.
   * And keep coherence between the flag needHardware and the selected
   * hardware.
   * Aka: if not needed, hardware must be null.
   */
  checkIfStillCanUncheckOrderablePhones() {
    const uncheckedPhones = sum(
      map(flatten(this.framedLines), (framedLine) => {
        if (!framedLine.line.needHardware && framedLine.line.hardware) {
          set(framedLine, 'line.hardware', null);
        }

        return framedLine.line.needHardware ? 0 : 1;
      }),
    );

    this.canUncheckOrderablePhones = uncheckedPhones < this.modem.linesOnModem;
  }

  /**
   * Set the number of hardware to order
   * @param {Integer} number Number of hardware to order
   */
  setOrderCount(number, isInitialSelection) {
    this.selectedPhones = [];
    if (typeof number !== 'undefined') {
      this.orderCount = find(this.orderCountSelect, { value: number });
    }

    if (
      !isInitialSelection &&
      this.orderCountSelect[0] &&
      this.orderCountSelect[0].value === 0
    ) {
      // remove the placeholder
      this.orderCountSelect.shift();
    }

    this.modem.lines.forEach((line, index) => {
      set(line, 'enabled', index < this.orderCount.value);
    });

    this.framedLines = buildFramedObject(
      this.modem.lines,
      2,
      (line, localIndex) => {
        if (!line.enabled) {
          return false;
        }
        return {
          line,
          carouselIndex: 0,
          availableHardwares: JSON.parse(JSON.stringify(this.hardwares)),
          index: localIndex + 1,
        };
      },
    );

    this.spinnerExtremities = {
      min: 0,
      max: this.orderCount.value,
    };
    this.quantityMax = 0;

    this.isFirstSelect = true;
    this.checkIfStillCanUncheckOrderablePhones();
  }

  /**
   * Check if all hardware are configured
   * @returns {boolean} True if ready
   */
  isHardwareConfigured() {
    if (this.modem.lines) {
      let ready = true;
      this.modem.lines.forEach((line) => {
        if (!line.isConfigured()) {
          ready = false;
        }
      });
      return ready;
    }
    return false;
  }

  /**
   * Check if something needs to be shipped
   * @returns {boolean} True if ready
   */
  isShipping() {
    if (this.selectedPhones) {
      let shipping = false;
      this.selectedPhones.forEach((line) => {
        if (line.needShipping && !this.isSipOnly) {
          shipping = true;
        }
      });
      return shipping;
    }
    return true;
  }

  /**
   * Check if transport is configured
   * @returns {boolean} True if ready
   */
  isTransportConfigured() {
    switch (this.shippingMode) {
      case 'mondialRelay':
        return !!this.mondialRelay;
      case 'transporter':
        return !!this.transporterAddress;
      default:
        return false;
    }
  }

  getTransporter() {
    switch (this.shippingMode) {
      case 'mondialRelay':
        return {
          mondialRelayId: this.mondialRelay.id,
        };
      case 'transporter':
        return {
          shippingId: this.transporterAddress,
        };
      default:
        return {};
    }
  }

  /**
   * Check if the order is ready
   * @returns {boolean}
   */
  isOrderReady() {
    let nbLinesConfigured = 0;
    this.selectedPhones.forEach((line) => {
      if (line) {
        nbLinesConfigured += line.quantity;
      }
    });
    const needHardware =
      nbLinesConfigured === this.orderCount.value &&
      this.isShipping() &&
      this.isTransportConfigured();
    const needNoHardware =
      nbLinesConfigured === this.modem.linesOnModem && !this.isShipping();

    return needNoHardware || needHardware;
  }

  /**
   * Launch a new Order
   */
  launchOrder() {
    this.orderPending = true;
    const data = [];
    this.selectedPhones.forEach((line) => {
      if (line.needShipping) {
        if (line) {
          data.push(
            angular.extend({ hardwareName: line.name }, this.getTransporter()),
          );
        }
      } else if (line.name.includes('sipLine')) {
        data.push({ hardwareName: 'modem' });
      }
    });
    this.OvhApiPackXdslVoipLine.Aapi()
      .activate(
        {
          packId: this.packName,
        },
        { lines: data },
      )
      .$promise.then(
        (order) => {
          this.orderDone = true;
          this.orderDetails = head(order.data);
        },
        (err) => {
          this.orderDone = false;
          this.orderError = err;
          return new this.TucToastError(err);
        },
      )
      .finally(() => {
        this.orderPending = false;
      });
  }

  /**
   * Initialize the controller
   */
  init() {
    this.shippingMode = 'mondialRelay';
    this.mondialRelay = null;
    this.phoneBill = {
      deposit: 0,
      fees: 0,
      transportCost: 0,
      total: 0,
    };
    this.modem = {};
    this.orderCountSelect = [];
    this.framedLines = [];

    this.phoneToOrder = null;
    this.isSipOnly = false;

    this.loadData(this.packName).then((data) => {
      this.modem.availableSlots = find(data[0], { name: 'voipLine' });

      // eslint-disable-next-line prefer-destructuring
      this.hardwares = data[1];

      // initialize brand list for tabs
      this.initializeBrandList();

      const linesOnModems = remove(this.hardwares, { name: 'modem' });
      if (linesOnModems && isArray(linesOnModems)) {
        // Add this choice to hardwares list
        if (linesOnModems.length > 0) {
          this.isSipLineAvailable = true;
        } else {
          this.isSipLineAvailable = false;
        }

        this.modem.linesOnModem = linesOnModems.length
          ? linesOnModems[0].max
          : 0;
      }

      this.selectedPhones = [];

      // Set lines for modem
      this.modem.lines = [];
      for (let i = 0; i < this.modem.availableSlots.available; i += 1) {
        this.modem.lines.push({
          hardware: null,
          enabled: true,
          needHardware: true,
          isShipping() {
            return !!this.needHardware && !!this.enabled;
          },
          isConfigured() {
            return (
              !this.enabled ||
              !this.needHardware ||
              (!!this.needHardware && !!this.enabled && !!this.hardware)
            );
          },
        });
      }

      this.buildSlotCount(this.modem.availableSlots.available);

      this.shippingAddresses = removeDuplicateAddress(data[2]);
      this.framedShippingAddresses = buildFramedObject(this.shippingAddresses);
    }, this.TucToastError);
  }

  initializeBrandList() {
    const brandList = ['All'];
    if (this.hardwares.length) {
      this.hardwares.forEach((offer) => {
        let brand = offer.name.substring(0, offer.name.indexOf('.'));
        if (brand) {
          brand = brand.replace(/^./, brand[0].toUpperCase());
          if (!brandList.includes(brand)) {
            brandList.push(brand);
          }
        }
      });
    }
    this.brandList = brandList;
  }

  filterByBrand(brand) {
    const listFiltered = [];
    if ('all'.includes(brand.toLowerCase())) {
      this.phonesDisplayed = this.hardwares;
    } else {
      this.hardwares.forEach((offer) => {
        if (offer.name.includes(brand.toLowerCase())) {
          listFiltered.push(offer);
        }
      });
      this.phonesDisplayed = listFiltered;
    }
  }

  sortPriceAsc() {
    this.phonesDisplayed = sortBy(this.hardwares, 'deposit.value');
  }

  sortPriceDesc() {
    this.phonesDisplayed = sortBy(this.hardwares, 'deposit.value').reverse();
  }

  // Available only for 1 line to activate
  selectPhone(phone) {
    if (this.orderCount.value === 1) {
      for (let i = 0; i < this.orderCount.value; i += 1) {
        const line = phone;
        line.quantity = 1;
        this.selectedPhones.push(line);
      }
      this.updatePhoneBill();
    }
    this.selectedPhone = this.phoneToOrder;
  }

  updateOrderTotal(quantity, phone) {
    this.errorQuantity = false;

    if (this.selectedPhones.length === 0 && quantity > 0) {
      const line = phone;
      line.quantity = quantity;
      this.selectedPhones.push(line);
    } else {
      let notFound = true;
      this.selectedPhones.forEach((select) => {
        const updated = select;
        if (updated.name === phone.name) {
          updated.quantity = quantity;
          notFound = false;
        }
        return updated;
      });
      if (notFound) {
        const line = phone;
        line.quantity = quantity;
        this.selectedPhones.push(line);
      }
    }

    this.updatePhoneBill();

    // Check quantity
    let q = 0;
    this.selectedPhones.forEach((line) => {
      if (line) {
        q += line.quantity;
      }
    });
    if (q > this.orderCount.value) {
      this.errorQuantity = true;
    }
  }

  updateShipping() {
    this.updatePhoneBill();
  }

  updatePhoneBill() {
    let deposit = 0;
    if (this.selectedPhones && this.selectedPhones.length > 0) {
      this.selectedPhones.forEach((line) => {
        deposit += line.deposit.value * line.quantity;
      });
    }
    let fees = 0;
    if (this.selectedPhones && this.selectedPhones.length > 0) {
      this.selectedPhones.forEach((line) => {
        if (line.fees) {
          fees += line.fees.value * line.quantity;
        }
      });
    }
    const transportCost =
      this.shippingMode === 'mondialRelay' || !this.isShipping()
        ? 0
        : this.costs.voip.shipping.transporter.value;

    const total = deposit + fees + transportCost;
    this.phoneBill = {
      deposit,
      fees,
      transportCost,
      total,
    };
  }

  selectSipLineWithoutPhone() {
    if (this.orderCount.value === 1) {
      for (let i = 0; i < this.orderCount.value; i += 1) {
        const line = this.modem.lines[i];
        line.needHardware = false;
        line.isShipping = false;
      }
      this.isSipOnly = true;
    }
    this.checkIfStillCanUncheckOrderablePhones();
  }
}
