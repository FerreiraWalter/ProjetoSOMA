const express = require("express");
const showProjectRouter = express.Router();

const ProjectController = require("../controllers/ProjectController");

showProjectRouter.get('/', ProjectController.allResults);
showProjectRouter.get('/getById/:id_projeto', ProjectController.specificProject);

module.exports = showProjectRouter;
