const { User } = require('../model/user')
const bcrypt = require('bcrypt')
const validacao = require('../schema/userSchema')
const { xid } = require('zod')

// controller para registrar um novo usuário
async function registe(req, res, next) {
    const { nome, email, password } = req.body
    const z = validacao.safeParse(req.body)
    try {
        const hash =await bcrypt.hash(z.data.password, 12)
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


module.exports = { registe }