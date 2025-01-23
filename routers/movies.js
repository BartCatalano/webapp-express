const express = require("express");
const controllerMovies = require("../controllers/controllerMovies");

const router = express.Router();

// index
router.get("/", controllerMovies.index);

// show
router.get("/:id", controllerMovies.show);

module.exports = router;