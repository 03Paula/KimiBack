const express = require("express");
const router = express.Router();
const mangasRoutes = require("./mangasRoutes");
const figurasRoutes = require("./figurasRoutes")
const usuariosRoutes = require("./usuariosroutes")

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Mangas y Figuras de anime para la tienda")
})
// localhost:3001/api/v1/mangas
router.use("/mangas",  mangasRoutes.router);
// localhost:3001/api/v1/figuras
router.use("/figuras", figurasRoutes.router);
// localhost:3001/api/v1/usuarios
router.use("/usuarios", usuariosRoutes.router);


module.exports.router = router