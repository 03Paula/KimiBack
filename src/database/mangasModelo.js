const datos = require("./mangas.json");


const getAllMangas = () => {
    return datos.mangas;
}

const getOneManga = (nombre) => {
    const oneManga = datos.mangas[nombre]
    return oneManga
}

module.exports = {
    getAllMangas,
    getOneManga
}
