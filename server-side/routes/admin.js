const ControllerAdmin = require('../controllers/controllerAdmin')
const ControllerGame = require('../controllers/controllerGame')
const ControllerGenre = require('../controllers/controllerGenre')
const authentication = require('../middlewares/authentication')

const routerAdmin = require('express').Router()

routerAdmin.post('/login', ControllerAdmin.login)
routerAdmin.post('/register', ControllerAdmin.register)

routerAdmin.get('/game', authentication, ControllerGame.getGame)
routerAdmin.get('/game/:gameId', authentication, ControllerGame.getGameDetail)
routerAdmin.post('/game', authentication, ControllerGame.addGame)
routerAdmin.put('/game/:gameId', authentication, ControllerGame.updateGame)
routerAdmin.delete('/game/:gameId', authentication, ControllerGame.deleteGame)

routerAdmin.get('/genres', authentication, ControllerGenre.getGenre)
routerAdmin.get('/genres/:genreId', authentication, ControllerGenre.getGenreById)
routerAdmin.post('/genres', authentication, ControllerGenre.addGenre)
routerAdmin.put('/genres/:genreId', authentication, ControllerGenre.updateGenre)
routerAdmin.delete('/genres/:genreId', authentication, ControllerGenre.deleteGenre)

module.exports = routerAdmin