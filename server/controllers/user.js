const models = require("../../database/models");
const { response } = require("../helpers/responses");

const createUser = async (req, res) => {
    try {
        const { body } = req;
        //Busca un usuario donde el email sea igual al que manda el body
        const findEmail = await models.users.findOne({
            where: {
                email: body.email,
            },
        });
        //Si existe el email, retorna un mensaje
        if (findEmail) return response(400, res, "UPSS Parece que ya existe un usuario registrado con estos datos");
        
        const addUser = await models.users.create({
            firstName:body.firstName, 
            lastName:body.lastName,
            email: body.email,
        });
        return response(200,res,"Ya falta poco... En breve te enviaremos correo electrónico para validar tu cuenta");
    } catch (error) {
        return response(500, res, "Lo sentimos, ocurrió un error en el servidor");
    }
};

module.exports = { 
    createUser
};