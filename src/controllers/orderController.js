const db = require('../config/database')
const { Product } = require('../model/product')
const { User } = require('../model/user')
const { order } = require('../model/order')


async function pedido(req, res, next) {
    const { id, quantidade } = req.body
    try {

        const produto = await Product.findOne({ where: { id } })
        if (!produto) {
            return res.status(404).json({ message: 'Produto Invalido' })
        }
        if (produto.estoque < quantidade) {
            return res.status(400).json({ message: 'Produto Indisponivél' })
        }

        order.create({
            userId: req.user.id,
            ProdutoId: produto.id,
            quantidade,
            total: produto.preco * quantidade,
            status: 'PENDENTE'
        })
const novoEstoque= produto.estoque - quantidade
        produto.update({
            estoque: novoEstoque
        })

        return res.status(200).json({ message: 'Pedido Criado' })

    } catch (error) {
        next(error)
    }


}

module.exports = { pedido }