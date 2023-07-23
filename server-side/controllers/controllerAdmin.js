const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class ControllerAdmin {

    static async login(req, res, next) {
        const { email, password } = req.body
        try {
            if (!email || !password) throw { name: 'invalidInput' }

            const user = await User.findOne({ where: { email } })
            if (!user) throw { name: 'invalidUser' }
            
            const compPassword = comparePassword(password, user.password)
            if (!compPassword) {
                throw { name: 'invalidUser' }
            }

            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role,
                username: user.username
            })

            res.status(200).json({
                access_token: token,
                email: user.email,
                role: user.role,
                username: user.username
            })

        } catch (error) {
            next(error)
        }
    }
    static async register(req, res, next) {
        const { username, email, password, phoneNumber, address } = req.body
        try {
            const newUser = await User.create({ username, email, password, role: 'admin', phoneNumber, address })
            res.status(201).json({ newUser })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerAdmin