const {
  createNewCarService,
  getCarsOfOneUserService,
  getAllCarService,
  updateCarService,
  updateIsdeletedCarService,
  finhCarByUserService,
  uploadCarImageService,
} = require("../services/cars.service");
const { Exeptions } = require("../utils/ExeptionError");
const db = require("../models");
module.exports.createNewCarController = (req, res, next) => {
  createNewCarService(req.body).then(
    (car) => {
      return res.json({ status: 200, message: "success!" });
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.getCarsOfOneUserController = async (req, res, next) => {
  getCarsOfOneUserService(req.user.userUuid).then(
    (cars) => res.json({ cars }),
    (err) => next(new Exeptions(err.message, err.status))
  );
};

module.exports.getAllCarController = (req, res, next) => {
  getAllCarService(req.body).then(
    (allCar) => {
      return res.json(allCar);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.uploadCarImageController = (req, res, next) => {
  // const fromData = new
  // uploadCarImageService(req.file).then((result) => res.json(result));
  // res.json(req);
  // res.json(req.file);
};

module.exports.updateCarController = (req, res, next) => {
  const { id } = req.query;
  updateCarService(id, req.body).then(
    (updateCar) => {
      return res.json(updateCar);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.updateIsdeletedCarController = (req, res, next) => {
  const { id } = req.query;
  updateIsdeletedCarService(id, req.body).then(
    (updateCar) => {
      return res.json(updateCar);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.findCarByUserController = async (req, res, next) => {
  const { carname } = req.query;

  finhCarByUserService(req.user.userUuid, carname).then(
    (cars) => res.json({ cars }),
    (err) => next(new Exeptions(err.message, err.status))
  );
};
