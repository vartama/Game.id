const { Product, Category, Image, User } = require('../models/index')

class ControllerCustomer {
    static async getGame(req, res, next) {
        try {
            const games = await Product.findAll({
                include: [Category, Image, User],
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(games)
        } catch (error) {
            next(error)
        }
    }

    static async getGameDetail(req, res, next) {
        const {gameId} = req.params
        try {
            const game = await Product.findOne({
                where: {
                    id: gameId
                },
                include: [Category, Image, User]
            })  
            res.status(200).json(game) 
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerCustomer