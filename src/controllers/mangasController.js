const mangasServices = require("../services/mangasServices");

// /api/v1/mangas
const getAllMangas = (req , res , next) => {
    const allMangas = mangasServices.getAllMangas();
    res.send(allMangas)
};

// /api/v1/mangas/:manga
const getOneManga = (req, res, next) => {
    //Obtenemos el parametro de ruta.

    const { manga } = req.params;

    const OneManga = mangasServices.getOneManga(manga)

    if (OneManga) {
        res.send(OneManga)
    } else {
        res.status(404)
    }
};


module.exports = {
    getAllMangas,
    getOneManga
}


