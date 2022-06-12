const express = require("express");
const authController = require("../controllers/auth");

const route = express.Router();

route.get("/signup", authController.getSignup);
route.post("/signup", authController.postSignup);
route.get("/login", authController.getLogin);
route.post("/login", authController.postLogin);

module.exports = route;
