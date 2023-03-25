const { validResult } = require("express-validator");

const validateResult = (req, res, next) => {
    try {
        validResult(req).throw();
        return next();
    } catch (error) {
        res.send({ errors: e.array()[0].msg + ":" + e.array()[0].param });
    }
};

module.exports= { validateResult };