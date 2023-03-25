const fs = require("fs");
const path = require("path");

const fileUpload = async (file, namePath) => {
    try {
        //Match verifica que el codigo en base 65 esté correcto, en base a una función regex  
        let matches = file.match(/^data:(.+);base64,(.+)$/);
        //La variable matches va a ser un array, y entonces se valida su tamaño:
        if(matches.length !== 3) return new Error("Archivo inválido");
        //Si es correcto el formato, entonces:
        let response = {};
        response.type = matches[1];
        response.data = Buffer.from(matches[2], "base64");
        //Obteniendo extensión
        let extension = response.type.split("/");
        extension =extension[1].split("+");
        extension = extension[0];

        //Validación del directorio:
        if(
            !fs.existsSync(
                `${path.dirname(require.main.filename)}/server/public${namePath}`
            )    
        ){
            fs.mkdirSync(
                `${path.dirname(require.main.filename)}/server/public${namePath}`,
                true
            )
        }
        
        //Guardar el nombre de la ruta de la imagen
        let fileRoute = `${namePath}/${new Date().getTime()}.${extension}`;

        //Se guarda la imagen
        //Require.main.filename: es para ubicarnos en la raiz del proyecto
        //fileRoute: tiene el nombre de la ruta que se envió
        //response.data: tiene el canal de bits de la imagen
        fs.writeFileSync(
            `${path.dirname(require.main.filename)}/server/public${fileRoute}`,
            response.data,
            {
                encoding: "utf8",
            }
        );

        //Se retorna el nombre de la ruta:
        return fileRoute;

    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {fileUpload}