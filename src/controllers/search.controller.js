const { Exeptions } = require("../utils/ExeptionError");

const {
  insertNewHistory,
  getSearchHistoriesService,
} = require("../services/search_history.service");
const {
  searchLocationService,
  getPlaceDetailService,
} = require("../services/vietmap.service");

module.exports.searchLocationController = async (req, res, next) => {
  const { q } = req.query;

  try {
    const locationData = await searchLocationService(q);
    res.json(locationData);
  } catch (err) {
    next(new Exeptions(err.message, err.code));
  }
};

module.exports.fireSearchLocationDetailController = async (req, res, next) => {
  const { userID, refID } = req.query;
  try {
    // const fakeData = {
    //   display:
    //     "16 Đường Nguyễn Văn Nghi Phường 5,Quận Gò Vấp,Thành Phố Hồ Chí Minh",
    //   name: "16 Đường Nguyễn Văn Nghi",
    //   hs_num: "16",
    //   street: "Đường Nguyễn Văn Nghi",
    //   address: "",
    //   city_id: 12,
    //   city: "Thành Phố Hồ Chí Minh",
    //   district_id: 3852,
    //   district: "Quận Gò Vấp",
    //   ward_id: 724748,
    //   ward: "Phường 5",
    //   lat: 10.82144541100007,
    //   lng: 106.68888355900003,
    // };
    const locationDetailData = await getPlaceDetailService(refID);
    await insertNewHistory({ ...locationDetailData, userID });
    res.json({ code: 200, data: locationDetailData });
  } catch (err) {
    next(new Exeptions(err.message, err.code));
  }
};

module.exports.getSearchHistoriesController = async (req, res, next) => {
  const { userID } = req.query;
  try {
    const data = await getSearchHistoriesService(userID);
    res.json({ code: 200, data });
  } catch (err) {
    next(new Exeptions(err.message));
  }
};
