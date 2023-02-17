const express = require("express");
const router = express.Router();
const mangasController = require("../../controllers/mangasController")

// localhost:3001/api/v1/mangas/
router.route("/")
    .get(mangasController.getAllMangas);

// localhost:3001/api/v1/mangas/:manga
router.route("/:manga")
    .get(mangasController.getOneManga);

module.exports.router = router;