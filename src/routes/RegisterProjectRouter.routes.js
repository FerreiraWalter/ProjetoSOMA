const express = require("express");
const ProjectController = require("../controllers/ProjectController");

const registerProjectRouter = express.Router();

registerProjectRouter.post('/', ProjectController.create);

module.exports = registerProjectRouter;
