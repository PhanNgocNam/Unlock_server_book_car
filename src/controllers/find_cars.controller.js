const { get } = require("../utils/get");
const { getAllCarHave5gService } = require("../services/find_car.service");

module.exports.findCarsController = async (req, res, next) => {
  const { lat, lng } = req.query;

  try {
    const allCarInUnlockSystem = await getAllCarService();

    const processUnlocCarData = JSON.parse(allCarInUnlockSystem).map((car) => [
      car.license_plate,
      car,
    ]);

    const unlockCarMap = new Map(processUnlocCarData);
    const allCarIn5gSystem = await getAllCarHave5gService();

    const process5gCarData = allCarIn5gSystem.map((carHas5ggps) => ({
      license_plate: carHas5ggps.license_plate,
      time: carHas5ggps.time,
      lat: carHas5ggps.lat,
      lng: carHas5ggps.lng,
      distance: getDistance([lat, lng], [carHas5ggps.lat, carHas5ggps.lng]),
    }));

    const top10NearByCars = process5gCarData
      .sort((a, b) => a.distance - b.distance)
      .splice(0, 10);

    const processTop10NearByCars = top10NearByCars.map((car) => {
      if (!unlockCarMap.has(car.license_plate)) return 0;
      return {
        min: Math.ceil((car.distance / 1000 / 40) * 60),
        car_data: unlockCarMap.get(car.license_plate),
      };
    });

    const finalResult = processTop10NearByCars.map((result) => {
      if (result === 0) return undefined;
      return {
        carID: result.car_data.id,
        car_classification: result.car_data.car_classification,
        license_plate: result.car_data.license_plate,
        suggested_price: result.car_data.suggested_price,
        vehicle_type: result.car_data.vehicle_type,
        seri: result.car_data.seri,
        min: result.min,
      };
    });

    res.json({ code: 200, data: top10NearByCars });
  } catch (err) {
    next(new Exeptions(err.message));
  }
};

const db = require("../models");
const { getDistance } = require("../utils/getDistance");
const { Exeptions } = require("../utils/ExeptionError");
const { getAllCarService } = require("../services/cars.service");
module.exports.insertToDB = async (req, res, next) => {
  get("https://old.mobicam.vn/assets/apimapgps.php").then(async (resp) => {
    const data = resp.map((carData) => ({
      license_plate: carData.vehicle,
      time: carData.time,
      lat: carData.lat,
      lng: carData.lng,
    }));
    await db.cars_have_5g.bulkCreate(data);
    res.json({ code: 200, message: "ok" });
  });
};
