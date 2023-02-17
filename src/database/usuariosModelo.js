const datos = require("./usuarios.json");
const fs = require("fs");

const getAllUsers = () => {
    return datos.usuarios
}

const getOneUser = (nombre) => {
    const oneUser = datos.usuarios[nombre];
    return oneUser;
}

const insertUser = (usuario) => {
    const nombre = usuario.nombre.replace(" ", "");
    datos.usuarios[nombre] = usuario 

    //Escribimos el fichero con esos nuevos datos
    fs.writeFileSync(
        "./src/database/usuarios.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );

    return getOneUser(nombre)
}

const deleteUser = (nombre) => {
    //Comprobamos que el producto existe, si es así lo borramos.
    if (!getOneUser(nombre)){
        return false;
    }else{
        delete datos.usuarios[nombre];
        return true;
    }
}

const updatedUser = (user, updateUser) => {
    //Cambiamos los datos por los introducidos
    datos.usuarios[user].nombre = updateUser.nombre;
    datos.usuarios[user].apellidos = updateUser.apellidos;
    datos.usuarios[user].email = updateUser.email;
    datos.usuarios[user].nombreusu = updateUser.nombreusu;
    datos.usuarios[user].nacimiento = updateUser.nacimiento;
    datos.usuarios[user].contraseña = updateUser.contraseña;

    //Escribimos los datos modificados en el json.
    fs.writeFileSync(
        "./src/database/usuarios.json",
        JSON.stringify(datos, null, 2),
        "utf-8"
    )

    return updateProduct;
}

module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    deleteUser,
    updatedUser
}