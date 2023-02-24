const express = require("express");
const router = express.Router();

// import controllers
const { login, dashboard } = require("../controllers/main");

router.route("/loginPage").post(login);
router.route("/dashboardPage").get(dashboard);

module.exports = router;
