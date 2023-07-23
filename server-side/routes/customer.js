const ControllerCustomer = require("../controllers/controllerCustomer");

const routerCustomer = require("express").Router();

routerCustomer.get('/', ControllerCustomer.getGame)
routerCustomer.get('/:gameId', ControllerCustomer.getGameDetail)

module.exports = routerCustomer