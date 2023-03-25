const response = (status, res, message) => {
    res.status(status).send({ message });
};

module.exports = { response };