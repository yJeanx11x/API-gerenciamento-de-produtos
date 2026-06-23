const { User } = require('../model/user')
const bcrypt = require('bcrypt')
const validacao = require('../schema/userSchema')


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
        return res.status(201).json({ message: 'Login com sucesso!' })

    } catch (error) {
        next(error)
    }

}
module.exports = { registe, login }