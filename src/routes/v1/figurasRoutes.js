const express = require("express");
const router = express.Router();
const figurasController = require("../../controllers/figurasController")

// localhost:3001/api/v1/figuras/
router.route("/")
    .get(figurasController.getAllFiguras);

// localhost:3001/api/v1/figuras/:figura
router.route("/:figura")
    .get(figurasController.getOneFigura);

module.exports.router = router;