const express = require("express");
const ProjectController = require("../controllers/ProjectController");

const changeProjectRouter = express.Router();

changeProjectRouter.put('/:id_projeto', ProjectController.update);

module.exports = changeProjectRouter;
