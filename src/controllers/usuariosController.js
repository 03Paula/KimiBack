const usuariosServices = require("../services/usuariosServices");

// api/v1/usuarios
const getAllUsers = (req, res, next) => {
    const allUsers = usuariosServices.getAllUsers();
    res.send(allUsers);
}

//  /api/v1/usuarios
const createOneUser = (req, res , next) => {

    const { body } = req;

    if(!body.nombre || !body.apellidos || !body.email || !body.nombreusu || !body.nacimiento || !body.contraseña){
        res.status(404).send({mensaje: "faltan datos por rellenar"});
    }else {

        const newUser = {
            "nombre": body.nombre,
            "apellidos": body.apellidos,
            "email": body.email,
            "nombreusu": body.nombreusu,
            "nacimiento": body.nacimiento,
            "contraseña": body.contraseña
        }

        const createdUser = usuariosServices.createOneUser(newUser);

        if (createdUser) res.status(200).send(createdUser);
        else res.status(406).end();
        
    }

    res.end();

}

//  /api/v1/usuarios/:user
const getOneUser = (req, res, next) => {

    const { user } = req.params;

    const oneUser = usuariosServices.getOneUser(user);

    if (oneUser){
        res.status(200).send(oneUser);
    }else{
        res.status(404);
    }

}

// api/v1/usuarios/:user
const updateOneUser = (req, res, next) => {

    const { user } = req.params;

    const { body } = req.body;

    if (!body.nombre || !body.apellidos || !body.email || !body.nombreusu || !body.nacimiento || !body.contraseña ){
        res.status(400).send({mensaje: "Faltan datos por rellenar"});
    }else {

        const newUser = {
            "nombre": body.nombre,
            "apellidos": body.apellidos,
            "email": body.email,
            "nombreusu": body.nombreusu,
            "nacimiento": body.nacimiento,
            "contraseña": body.contraseña
        }

        if (usuariosServices.getOneUser(prod)){
            const updatedUser = usuariosServices.updateOneUser(prod, newUser);
            res.status(200).send("Usuario actualizado");
        }else{
            res.status(404).send({mensaje: "No se puede actualizar la información del usuario ya que no existe"});
        }
    }
}

// api/v1/usuarios/:user
const deleteOneUser = (req, res, next) => {
    const { user } = req.params;

    const deleteUser = usuariosServices.deleteOneUser(user);

    if (!deleteUser){
        res.status(404).send({mensaje: "El usuario no se puede eliminar porque no existe"});
    }else{
        res.status(200).send({mensaje: "Usuario eliminado con éxito"});
    }
}


module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}