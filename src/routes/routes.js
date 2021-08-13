const express = require("express");

const changeProjectRouter = require("./ChangeProjectRouter.routes");
const deleteProjectRouter = require("./DeleteProjectRouter.routes");
const registerProjectRouter = require("./RegisterProjectRouter.routes");
const showProjectRouter = require("./ShowProjectRouter.routes");

const routes = express.Router();

routes.use('/api/projeto/', showProjectRouter);
routes.use('/api/projeto/create', registerProjectRouter);
routes.use('/api/projeto/update', changeProjectRouter);
routes.use('/api/projeto/delete', deleteProjectRouter);

module.exports = routes;
