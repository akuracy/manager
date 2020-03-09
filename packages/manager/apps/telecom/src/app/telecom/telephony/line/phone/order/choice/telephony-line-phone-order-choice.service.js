/**
 * Initialize brand list for the filter
 * @param {*} offers
 */
export default function initializeBrandList(offers) {
  const brandList = ['All'];
  if (offers.length) {
    offers.forEach((offer) => {
      let brand;
      if (offer.brand) {
        brand = offer.brand.substring(0, offer.brand.indexOf('.'));
      } else if (offer.name) {
        brand = offer.name.substring(0, offer.name.indexOf('.'));
      }
      brand = brand.replace(/^./, brand[0].toUpperCase());
      if (!brandList.includes(brand)) {
        brandList.push(brand);
      }
    });
  }
  return brandList;
}
