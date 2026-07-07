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
        if (produto.estoque < quantidade || quantidade == 0) {
            return res.status(400).json({ message: 'Produto Indisponivél' })
        }
        order.create({
            userId: req.user.id,
            ProdutoId: produto.id,
            quantidade,
            total: produto.preco * quantidade,
            status: 'PENDENTE'
        })

        const novoEstoque = produto.estoque - quantidade
        produto.update({
            estoque: novoEstoque
        })

        return res.status(201).json({ message: 'Pedido Criado' })

    } catch (error) {
        next(error)
    }


}

async function listarPedidos(req, res, next) {

    try {

        const lista = await order.findAll({ where: { userId: req.user.id } })
        if (!lista) {
            return res.status(401).json({ message: 'Nenhum Produto na sua lista' })
        }
        return res.status(200).json({ message: lista })
    } catch (error) {
        next(error)
    }

}

async function buscarProdutoId(req, res, next) {
    const { id } = req.params
    try {
        const produtoId = await order.findOne({ where: { id } }, { where: { userId: req.user.id } })
        if (!produtoId) {
            return res.status(403).json({ message: 'Pedido não encontardo' })
        }
        return res.status(200).json(produtoId)
    } catch (error) {
        next(error)
    }
}

async function cancelarPedito(req, res, next) {
    const { id } = req.params

    try {


        const pedido = await order.findOne({ where: { id, userId: req.user.id } })



        if (!pedido) {
            return res.status(403).json({ message: 'O produto não está no seu carrinho' })
        }

        const produto = await Product.findByPk(pedido.ProdutoId);

        if (!produto) {
            return res.status(404).json({
                message: 'Produto não encontrado.'
            });
        }

        const estoqueN = Number(produto.estoque) + Number(pedido.quantidade);
        await produto.update({
            estoque: estoqueN
        });
        await pedido.destroy();
        return res.status(200).json({
            message: 'Pedido cancelado com sucesso.'
        });
        console.log("Novo estoque:", produto.estoque + pedido.quantidade);
    } catch (error) {
        next(error)
    }

}


module.exports = { pedido, listarPedidos, cancelarPedito,buscarProdutoId }