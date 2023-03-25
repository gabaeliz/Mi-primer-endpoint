const { addUserInfo } = require("../controllers/user");
const { Router } = require("express");
const router = Router();

router.post("/addUser", addUserInfo);


module.exports = { router };