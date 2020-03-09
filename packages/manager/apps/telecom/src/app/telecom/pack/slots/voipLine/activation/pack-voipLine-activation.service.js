import drop from 'lodash/drop';
import forEach from 'lodash/forEach';
import keys from 'lodash/keys';
import isString from 'lodash/isString';
import pick from 'lodash/pick';

/**
 * Build an array of large x n elements
 * @param {array} arrayData         Input data (flat array)
 * @param {Integer} largeParam      Array large
 * @param {function} callbackParam  Function to format data. if the function return false,
 *                                  data are ignored
 * @returns {Array}
 */
export function buildFramedObject(arrayData, largeParam, callbackParam) {
  const framedData = [];
  let localIndex = 0;
  let callback = callbackParam;
  let large = largeParam;
  if (typeof large === 'function') {
    callback = large;
  }
  if (typeof large === 'undefined' || typeof large === 'function') {
    large = 2;
  }
  if (typeof callback === 'undefined') {
    callback = (val) => val;
  }
  arrayData.forEach((data, index) => {
    const computedData = callback(data, localIndex, index);
    if (computedData !== false) {
      if (framedData.length <= Math.floor(localIndex / large)) {
        framedData[Math.floor(localIndex / large)] = [];
      }
      framedData[Math.floor(localIndex / 2)][localIndex % 2] = computedData;
      localIndex += 1;
    }
  });
  return framedData;
}

/**
 * Remove Dupplicate address
 * @param {array} data List of addresses
 * @returns {array}
 */
export function removeDuplicateAddress(dataParam) {
  let sameAddress = true;
  let data = dataParam;
  forEach(
    keys(
      pick(data[0], [
        'firstName',
        'zipCode',
        'cityName',
        'lastName',
        'address',
        'countryCode',
      ]),
    ),
    (key) => {
      if (isString(data[0][key]) && isString(data[1][key])) {
        if (data[0][key].toLowerCase() !== data[1][key].toLowerCase()) {
          sameAddress = false;
        }
      } else if (data[0][key] !== data[1][key]) {
        sameAddress = false;
      }
    },
  );
  if (sameAddress) {
    data = drop(data, 1);
  }
  return data;
}

export default { buildFramedObject, removeDuplicateAddress };
