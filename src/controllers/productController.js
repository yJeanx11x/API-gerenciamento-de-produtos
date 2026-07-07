
const { Product } = require('../model/product')
const { User } = require('../model/user')
const validacaoProduto=require('../schema/productShema')

// busca o operador de comparação do sequelize
const { Op } = require('sequelize');

async function produto(req, res, next) {


    try {
        const product = await Product.findAll({ attributes: ['id', 'nome', 'preco', 'estoque'] })

        if (product.length === 0) {
            return res.status(401).json({ message: 'Nenhum produto cadastrado.' })
        }
        return res.status(200).json({ product })
    } catch (error) {
        next(error)
    }

}

async function criarProduto(req, res, next) {
    const { nome, descricao, preco, estoque } = req.body
    const z = validacaoProduto.safeParse(req.body)

    try {
        const nomeProduto = await Product.findOne({ where: { nome } })
        if (nomeProduto) {
            return res.status(409).json({ message: 'Já existe um produto com este nome.' })
        }
        await Product.create({
            nome:z.data.nome,
            descricao:z.data.descricao,
            preco:z.data.preco,
            estoque:z.data.estoque,
            userId: req.user.id
        })

        if(z.error){
            return res.status(403).json({message:'Erro Padrinho'})
        }

        return res.status(201).json({ message: 'Produto cadastrado com sucesso.' })


    } catch (error) {
        next(error)
    }

}

async function deltarProduto(req, res, next) {
    const { id } = req.params
    try {
        const idProduto = await Product.findOne({ where: { id } })

        if (!idProduto) {
            return res.status(401).json({ message: 'Produto não cadastrado' })
        }
        await idProduto.destroy()
        return res.status(200).json({ message: 'Deletado com sucesso!', dado: idProduto })
    } catch (error) {
        next(error)
    }

}

async function atualizarP(req, res, next) {
    const { id } = req.params

    try {
        const idProduto = await Product.findOne({ where: { id } })
        if (!idProduto) {
            return res.status(401).json({ message: 'Produto não cadastrado' })
        }

        const { nome, descricao, preco, estoque } = req.body
        const produtoExistente = await Product.findOne({ where: { nome, id: { [Op.ne]: id } } });

        if (produtoExistente) {
            return res.status(409).json({
                message: 'Já existe um produto com este nome.'
            });
        }
        idProduto.update({
            nome,
            descricao,
            preco,
            estoque
        })
        return res.status(200).json({message:'Produto atualizado com sucesso.'})

    } catch (error) {
        next(error)
    }
}

module.exports = { produto, criarProduto, deltarProduto, atualizarP }