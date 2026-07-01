const express = require('express');
const appRoute = express.Router()
const authcontroll = require('../controllers/authController')
const jwt = require('../middlewares/jwt')

const produtos = require('../controllers/productController');

appRoute.post('/register', authcontroll.registe)
appRoute.post('/login', authcontroll.login)

appRoute.get('/produto', jwt.verificarToken, produtos.produto)

// função do adm criar / deletar / atualizar 
appRoute.post('/produto',jwt.verificarToken, produtos.criarProduto)

appRoute.delete('/produto/:id',jwt.verificarToken, produtos.deltarProduto)

module.exports = appRoute