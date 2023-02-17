const usuariosModelo = require("../database/usuariosModelo");
const {v4: uuid} = require("uuid");

const getAllUsers = () => {

    //Llamamos a la función que obtiene todos los usuarios.
    const allUsers = usuariosModelo.getAllUsers();
    return allUsers;
}

const createOneUser = (usuario) => {

    const usuarioNuevo = {
        ...usuario,
        id: uuid(), //Genera un id aleatorio
        fechaAlta: new Date().toLocaleDateString(),
        fechaModificacion: new Date().toLocaleDateString(),
    };

    const usuarioInsertado = usuariosModelo.insertUser(usuarioNuevo);

    if(!usuarioInsertado) {
        return false
    }else {
        return usuarioInsertado
    }

}


const getOneUser = (nombre) => {
    const oneUser = usuariosModelo.getOneUser(nombre);
    return oneUser;
}

const updateOneUser = (prod, updateUser) => {
    const newUser = {
        ...updateUser,
        fechaModificacion: new Date().toLocaleDateString()
    }

    const usuarioModificado = usuariosModelo.updatedUser(prod, newUser);

    if(!usuarioModificado){
        return false;
      }else{
        return usuarioModificado;
      }
}

const deleteOneUser = (nombre) => {
    //Eliminamos el usuario.

    const deletedUser = usuariosModelo.deleteUser(nombre);

    if(!deletedUser) {
        return false
    }else {
        return deletedUser;
    }
}

module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}