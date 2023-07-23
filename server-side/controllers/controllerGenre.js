const { User, Category, Product, Image } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class ControllerGenre {
    static async getGenre(req, res, next) {
        try {
            const genre = await Category.findAll()
            res.status(200).json(genre)
        } catch (error) {
            next(error)
        }
    }

    static async getGenreById(req, res, next) {
        const { genreId } = req.params
        try {
            const genre = await Category.findOne({
                where: {
                    id: genreId
                }
            })

            if (!genre) throw { name: 'dataNotFound' }

            res.status(200).json(genre)
        } catch (error) {
            next(error)
        }
    }

    static async addGenre(req, res, next) {
        const {name} = req.body
        try {
            const genre = await Category.create({name})

            res.status(201).json(genre)
        } catch (error) {
            next(error)
        }
    }

    static async updateGenre(req, res, next) {
        const { genreId } = req.params
        const { name } = req.body
        try {
            const genre = await Category.findOne({
                where: {
                    id: genreId
                }
            })

            if (!genre) throw { name: 'dataNotFound' }

            await Category.update({ name }, { where: { id: genreId } })

            res.status(201).json({
                message: `Genre with id ${genreId} has been updated`
            })
        } catch (error) {
            next(error)
        }
    }
    static async deleteGenre(req, res, next) {
        const {genreId} = req.params
        try {
            const genre = await Category.findOne({
                where: {
                    id: genreId
                }
            })

            if (!genre) throw { name: 'dataNotFound' }

            await Category.destroy({
                where: {
                    id: genreId
                }
            })

            res.status(201).json({
                message: `Genre with id ${genreId} has been deleted`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerGenre