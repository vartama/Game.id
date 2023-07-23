const { User, Category, Product, Image, sequelize } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class ControllerGame {
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
        const { gameId } = req.params
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

    static async addGame(req, res, next) {
        const transaction = await sequelize.transaction()
        const { name, description, price, categoryId, mainImg, images } = req.body
        try {
            const authorId = req.userData.id
            let slug
            if (name) {
                slug = name.split(/\s+/).join("-") + "-" + new Date().getTime();
            }

            const newGame = await Product.create({ name, slug, description, price, mainImg, categoryId, authorId }, { transaction })
            const gameImages = images.map(image => ({
                productId: newGame.id,
                imgUrl: image.imgUrl,
            }))
            const cekImage = await Image.bulkCreate(gameImages, { transaction })
            await transaction.commit()
            res.status(201).json(newGame)
        } catch (error) {
            next(error)
        }
    }

    static async updateGame(req, res, next) {
        const transaction = await sequelize.transaction()
        const { gameId } = req.params
        const { name, description, price, categoryId, mainImg, images } = req.body
        try {
            const findGame = await Product.findOne({
                where: {
                    id: gameId
                }
            })

            if (!findGame) throw { name: 'dataNotFound' }
            const authorId = req.userData.id
            let slug
            if (name) slug = name.split(/\s+/).join("-") + "-" + new Date().getTime();

            const updateGame = await Product.update(
                { name, slug, description, price, mainImg, categoryId, authorId },
                { where: { id: gameId } },
                { transaction }
            )

            await Image.destroy(
                { where: { productId : gameId } },
                { transaction }
            )
            const gameImages = images.map(image => ({
                productId: gameId,
                imgUrl: image.imgUrl
            }))
            await Image.bulkCreate(gameImages, { transaction })
            await transaction.commit()


            res.status(201).json({
                message: `Game with id ${gameId} has been updated`
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteGame(req, res, next) {
        const { gameId } = req.params
        try {
            const findGame = await Product.findOne({
                where: {
                    id: gameId
                }
            })

            if (!findGame) throw { name: 'dataNotFound' }

            await Product.destroy({
                where: {
                    id: gameId
                }
            })

            res.status(201).json({
                message: `Game with id ${gameId} has been deleted`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerGame