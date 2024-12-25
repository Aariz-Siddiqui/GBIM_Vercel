const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.route("/").get(controller.home);
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/contact").post(controller.contact);

module.exports = router;
