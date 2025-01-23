const express = require("express");
const controllerMovies = require("../controllers/controllerMovies");

const router = express.router();

// index
router.get("/", controllerMovies.index);

// show
router.get("/:id", controllerMovies.show);

export default router;