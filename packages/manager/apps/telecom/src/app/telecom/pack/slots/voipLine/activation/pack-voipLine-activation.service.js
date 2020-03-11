import drop from 'lodash/drop';
import forEach from 'lodash/forEach';
import isString from 'lodash/isString';
import keys from 'lodash/keys';
import pick from 'lodash/pick';

/**
 * Build an array of large x n elements
 * @param {array} arrayData         Input data (flat array)
 * @param {function} callbackParam  Function to format data. if the function return false,
 *                                  data are ignored
 * @returns {Array}
 */
export function buildFramedObject(arrayData, callbackParam) {
  const framedData = [];
  let localIndex = 0;
  let callback = callbackParam;
  if (typeof callback === 'undefined') {
    callback = (val) => val;
  }
  arrayData.forEach((data, index) => {
    const computedData = callback(data, localIndex, index);
    if (computedData !== false) {
      if (framedData.length <= Math.floor(localIndex / 2)) {
        framedData[Math.floor(localIndex / 2)] = [];
      }
      framedData[Math.floor(localIndex / 2)][localIndex % 2] = computedData;
      localIndex += 1;
    }
  });
  return framedData;
}

/**
 * Remove Dupplicate address
 * @param {array} dataParam List of addresses
 * @returns {array}
 */
export function removeDuplicateAddress(dataParam) {
  let sameAddress = true;
  let addresses = dataParam;
  forEach(
    keys(
      pick(addresses[0], [
        'firstName',
        'zipCode',
        'cityName',
        'lastName',
        'address',
        'countryCode',
      ]),
    ),
    (key) => {
      if (isString(addresses[0][key]) && isString(addresses[1][key])) {
        if (
          addresses[0][key].toLowerCase() !== addresses[1][key].toLowerCase()
        ) {
          sameAddress = false;
        }
      } else if (addresses[0][key] !== addresses[1][key]) {
        sameAddress = false;
      }
    },
  );
  if (sameAddress) {
    addresses = drop(addresses, 1);
  }
  return addresses;
}

export default { buildFramedObject, removeDuplicateAddress };
