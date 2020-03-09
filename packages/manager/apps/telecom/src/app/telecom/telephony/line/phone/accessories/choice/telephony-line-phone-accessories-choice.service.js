/**
 * Initialize brand list for the filter
 * @param {*} offers
 */
export default function initializeBrandList(offers) {
  const brandList = ['All'];
  if (offers.length) {
    offers.forEach((offer) => {
      let brand = offer.name.substring(0, offer.name.indexOf('.'));
      brand = brand.replace(/^./, brand[0].toUpperCase());
      if (!brandList.includes(brand)) {
        brandList.push(brand);
      }
    });
  }
  return brandList;
}
