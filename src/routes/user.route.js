const express = require("express");
const {
  registerMutipleUserController,
  getUserByEmailController,
  updateIsDeletedUsersController,
} = require("../controllers/user.controller");
const router = express.Router();
const db = require("../models");

const { processUsersData } = require("../middlewares/processUsersData");

router.post(
  "/register-mutiple-user",
  processUsersData,
  registerMutipleUserController
);

router.get("/get-one-user-by-uuid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await db.user.findOne({
    where: { userUuid: id },
    include: ["cars"],
  });
  res.json(user);
});

router.get("/get-one-user-by-email", getUserByEmailController);

router.put("/update-isdeleted-user", updateIsDeletedUsersController);

module.exports.userRoute = router;
