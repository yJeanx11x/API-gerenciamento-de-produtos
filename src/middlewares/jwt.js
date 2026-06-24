require('dotenv').config()
const { User } = require('../model/user');
const jtw = require('jsonwebtoken')

async function verificartoken(req, res, next) {
    const autheader = req.autheaders['authorization']
    const token = autheader && autheader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' })
    }
    try {
        const secret = process.env.SECRET
        const decoded = jwt.verificartoken(token, secret)
        const user = await User.findByPk(decoded.id)

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado!' })
        }
        if (user.token !== token) {
            return res.status(401).json({ message: 'Token antigo!' })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({ message: 'Token invalido!' })
    }
}
