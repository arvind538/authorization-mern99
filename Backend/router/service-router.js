const express = require("express");
const router = express.Router();
const getService = require("../controllers/service-controller");

router.route("/service").get(getService);

module.exports = router;
