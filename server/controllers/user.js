const models = require("../../database/models");

const addUserInfo = async (req, res) => {
    try {
        const { body } = req;
        const user = await models.connectPeople.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        });
        return res.status(201).send(user);
    } catch (error) {
        return res
            .status(500)
            .send('Lo sentimos ha ocurrido un error en el servidor')

    }
};

module.exports = { addUserInfo };