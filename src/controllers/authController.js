const { User } = require('../model/user')
const bcrypt = require('bcrypt')
const validacao = require('../schema/userSchema')
const { xid } = require('zod')


async function registe(req, res, next) {
    const { nome, email, password } = req.body
    const z = validacao.safeParse(req.body)
    try {
        const hash =await bcrypt.hash(password, 12)
        await User.create(
            {
                nome: z.data.nome,
                email: z.data.email,
                password: hash
            }
        )
        if (email) {
            return res.status(401).json({ message: 'Email já cadastrado!' })
        }

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' })
    } catch (error) {
        next(error)
    }

}
module.exports = { registe }