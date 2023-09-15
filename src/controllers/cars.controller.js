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

module.exports.createNewCarController = (req, res, next) => {
  createNewCarService(req.body, req).then(
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

const fs = require("fs").promises;
module.exports.uploadCarImageController = async (req, res, next) => {
  const { carID } = req.body;

  uploadCarImageService({ carID, images: [...req.files] }, req).then(
    (imgs) => {
      res.json({
        status: 200,
        imgs,
      });
    },
    (err) => {
      setTimeout(() => {
        req.files?.forEach(async (image) => {
          await fs.unlink(image.path);
          await fs.unlink(`public/assets/images/thumb-${image.filename}`);
        });
      }, 60 * 1000);
      next(new Exeptions(err.message, err.status));
    }
  );
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
