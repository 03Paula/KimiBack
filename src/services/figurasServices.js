const figurasModelo = require("../database/figurasModelo");


const getAllFiguras = () => {
    //Se llama al modelo, concretamente al modelo de las figuras.
    const allFiguras = figurasModelo.getAllFiguras();
    return allFiguras
}

const getOneFigura = (nombre) => {
    //Encontramos la figura con ese nombre.
    const oneFigura = figurasModelo.getOneFigura(nombre);
    return oneFigura
}


module.exports = {
    getAllFiguras,
    getOneFigura
}