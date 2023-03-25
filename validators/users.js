const { check } = require("express-validator");
const { validateResult } = require("../helpers/validators");

const validateUser = [
    check("firstName")
        .not()
        .isEmpty()
        .matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)
        .withMessage("First Name is required"),
    check("lastName")
        .not()
        .isEmpty()
        .matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)
        .withMessage("Last Name is required"),
    check("email")
        .not()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]

module.exports = { validateUser };