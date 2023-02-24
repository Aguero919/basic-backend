const express = require("express");
const router = express.Router();

// import controllers
const { login, dashboard } = require("../controllers/main");

// authentication
const authMiddleware = require("../middleware/auth"); 

router.route("/loginPage").post(login);
router.route("/dashboardPage").get(authMiddleware, dashboard);

module.exports = router;
