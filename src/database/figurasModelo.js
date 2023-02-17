const datos = require("./figuras.json");


const getAllFiguras = () => {
    return datos.figuras;
}

const getOneFigura = (nombre) => {
    const oneFigura = datos.figuras[nombre]
    return oneFigura
}

module.exports = {
    getAllFiguras,
    getOneFigura
}
