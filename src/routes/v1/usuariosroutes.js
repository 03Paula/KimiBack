const express = require("express");
const router = express.Router();
const usuariosController = require("../../controllers/usuariosController");

router.route("/")
    .get(usuariosController.getAllUsers)
    .post(usuariosController.createOneUser);

router.route("/:user")
    .get(usuariosController.getOneUser)
    .put(usuariosController.updateOneUser)
    .delete(usuariosController.deleteOneUser);


module.exports.router = router;