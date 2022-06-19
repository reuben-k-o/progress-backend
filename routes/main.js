const express = require("express");
const mainController = require("../controllers/main");

const router = express.Router();

router.get("/contact", mainController.getContact);

module.exports = router;
