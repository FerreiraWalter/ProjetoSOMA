const express = require("express");
const ProjectController = require("../controllers/ProjectController");

const deleteProjectRouter = express.Router();

deleteProjectRouter.delete('/:id_projeto', ProjectController.disableStatus);
deleteProjectRouter.delete('/:id_projeto/enable', ProjectController.enableStatus);

module.exports = deleteProjectRouter;
