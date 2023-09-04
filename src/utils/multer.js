const multer = require("multer");
const { customeCheckFileType } = require("../middlewares/checkFileType");
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fieldSize: 2000000 },
  fileFilter: (req, file, cb) => {
    customeCheckFileType(file, cb);
  },
});

module.exports.upload = upload;
