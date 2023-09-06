const sharp = require("sharp");

module.exports.resizeImage = (req, res, next) => {
  req.files?.map((image) => {
    sharp(image.path)
      .resize(330, 330, {
        fit: "contain",
        background: {
          r: 0,
          g: 0,
          b: 0,
          alpha: 0,
        },
      })
      .toFile(`${image.destination}` + `thumb-${image.filename}`);
  });

  next();
};
