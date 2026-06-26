
const { Product } = require('../model/product')

async function produto(req, res, next) {


    try {
        const product = await Product.findAll({ attributes: ['id','nome', 'preco', 'estoque'] })

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
    try {

        const nomeProduto = await Product.findOne({ where: { nome } })
        if (nomeProduto) {
            return res.status(409).json({ message: 'Já existe um produto com este nome.' })
        }

        await Product.create({
            nome,
            descricao,
            preco,
            estoque

        })

        return res.status(201).json({ message: 'Produto cadastrado com sucesso.' })
    } catch (error) {
        next()
    }

}



module.exports = { produto, criarProduto }