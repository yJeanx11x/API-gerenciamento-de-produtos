require('dotenv').config()
const { User } = require('../model/user')
const bcrypt = require('bcrypt')
const validacao = require('../schema/userSchema')
const jwt = require('jsonwebtoken')

// controller para registrar um novo usuário
async function registe(req, res, next) {
    const { nome, email, password } = req.body
    const z = validacao.safeParse(req.body)
    try {
        const hash = await bcrypt.hash(z.data.password, 12)
        await User.create(
            {
                nome: z.data.nome,
                email: z.data.email,
                password: hash
            }
        )
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' })
    } catch (error) {
        next(error)
    }

}
// controller para login de usuário
async function login(req, res, next) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(401).json({ message: 'email não cadastrado' })
        }
        const compareHash = await bcrypt.compare(password, user.password)
        if (!compareHash) {
            return res.status(401).json({ message: 'senha inválida' })

        }
        const secret = process.env.SECRET
        const token = jwt.sign({
    id: user.id,
    role: user.role
}, secret, {
    expiresIn: '1h'
})
        
        user.token = token

        await user.save()


        return res.status(200).json(token)

    } catch (error) {
        next(error)
    }

}

async function logout(req, res, next) {

        return res.status(200).json({
            message: 'Logout realizado com sucesso.'
        })

}
module.exports = { registe, login, logout }