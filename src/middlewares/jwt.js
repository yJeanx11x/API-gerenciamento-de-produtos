require('dotenv').config()
const { where } = require('sequelize');
const { User } = require('../model/user');
const jwt = require('jsonwebtoken')

async function verificarToken(req, res, next) {
    const athHeader = req.headers['authorization']
    const token = athHeader && athHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado!' })
    }
    try {
        const secret = process.env.SECRET
        const decoded = jwt.verify(token, secret)
        const user = await User.findOne({ where: decoded.id })

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado!' })
        }
        if (user.token !== token) {
            return res.status(401).json({ message: 'Token antigo!' })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido!' })
    }
}

module.exports = {
    verificarToken
}

