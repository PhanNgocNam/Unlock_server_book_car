const { getOneCarByIdService } = require("../services/cars.service");
const { getRouteAPIVMService } = require("../services/vietmap.service");
const { Exeptions } = require("../utils/ExeptionError");

module.exports.getTripDetailController = async (req, res, next) => {
  const { orignal, destination, carID } = req.body;
  try {
    const routeData = await getRouteAPIVMService(
      { ...orignal },
      { ...destination }
    );

    /**  distance in m, time in ms */
    const { distance, time } = routeData.paths[0];

    const carData = await getOneCarByIdService(carID);
    const { suggested_price } = carData;

    res.json({
      code: 200,
      price: (suggested_price * distance) / 1000,
      estimatedTripTime: time,
      carData,
    });
  } catch (err) {
    next(new Exeptions(err.message, err.status));
  }
};
