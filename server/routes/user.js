const { Router } = require("express");
const router = Router();
const { validateUser } =require("../../validators/users");
const { users } = require("../controllers"); 


router.post('auth/users/userInfo', validateUser,users.createUser);

module.exports = router;