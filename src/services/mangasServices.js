const mangasModelo = require("../database/mangasModelo");


const getAllMangas = () => {
    //Se llama al modelo, concretamente al modelo de los mangas.
    const allMangas = mangasModelo.getAllMangas();
    return allMangas
}

const getOneManga = (nombre) => {
    //Encontramos el manga con ese nombre.
    const oneManga = mangasModelo.getOneManga(nombre);
    return oneManga
}


module.exports = {
    getAllMangas,
    getOneManga
}