const express = require('express');
const appRoute = express.Router()
const authcontroll = require('../controllers/authController')
const jwt = require('../middlewares/jwt')

const ratelimet = require('../middlewares/RateLimit')
const produtos = require('../controllers/productController');
const pedido = require('../controllers/orderController')

const admin = require('../middlewares/isAdmin')

appRoute.post('/register', ratelimet, authcontroll.registe)
appRoute.post('/login', ratelimet, authcontroll.login)

appRoute.get('/produto', jwt.verificarToken, produtos.produto)

// função do adm criar / deletar / atualizar 
appRoute.post('/produto', jwt.verificarToken, admin.isAdmin, produtos.criarProduto)

appRoute.delete('/produto/:id', jwt.verificarToken, admin.isAdmin, produtos.deltarProduto)

appRoute.patch('/produto/:id', jwt.verificarToken, admin.isAdmin, produtos.atualizarP)

// Pedidos
appRoute.post('/pedidos',ratelimet ,jwt.verificarToken, pedido.pedido)
appRoute.get('/pedidos', jwt.verificarToken, pedido.listarPedidos)
appRoute.delete('/pedidos/:id', jwt.verificarToken, pedido.cancelarPedito)
appRoute.get('/pedidos/:id', jwt.verificarToken, pedido.buscarProdutoId)

module.exports = appRoute