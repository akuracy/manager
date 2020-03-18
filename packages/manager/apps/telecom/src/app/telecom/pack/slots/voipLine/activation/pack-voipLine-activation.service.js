import drop from 'lodash/drop';
import forEach from 'lodash/forEach';
import isString from 'lodash/isString';
import keys from 'lodash/keys';
import pick from 'lodash/pick';

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

export default { removeDuplicateAddress };
