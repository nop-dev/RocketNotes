const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");

sessionsRoutes = Router();

sessionsController = new SessionsController();

sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;
