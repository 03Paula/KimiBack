const figurasServices = require("../services/figurasServices");

// /api/v1/figuras
const getAllFiguras = (req , res , next) => {
    const allFiguras = figurasServices.getAllFiguras();
    res.send(allFiguras)
};

// /api/v1/figuras/:figura
const getOneFigura = (req, res, next) => {
    //Obtenemos el parametro de ruta.

    const { figura } = req.params;

    const OneFigura = figurasServices.getOneFigura(figura)

    if (OneFigura) {
        res.send(OneFigura)
    } else {
        res.status(404)
    }
    
};


module.exports = {
    getAllFiguras,
    getOneFigura
}


