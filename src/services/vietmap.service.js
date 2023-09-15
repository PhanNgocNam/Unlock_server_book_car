const { get } = require("../utils/get");

/** orginal = {lat: ?, lng: ?}, destination = {lat: ?, lng: ?} */
module.exports.getRouteAPIVMService = (orginal, destination) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await get(
        `https://maps.vietmap.vn/api/route?api-version=1.1&apikey=${process.env.VIETMAP_API_KEY}&point=${orginal.lat},${orginal.lng}&point=${destination.lat},${destination.lng}&vehicle=car`
      );
      resolve(data);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.searchLocationService = (text) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await get(
        `https://maps.vietmap.vn/api/search/v3?apikey=${process.env.VIETMAP_API_KEY}&text=${text}&layers=ADDRESS`
      );

      resolve(data);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.getPlaceDetailService = (refid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await get(
        `https://maps.vietmap.vn/api/place/v3?apikey=${process.env.VIETMAP_API_KEY}&refid=${refid}`
      );
      resolve(data);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
