const express = require('express');
const appRoute = express.Router()
const authcontroll = require('../controllers/authController')
const jwt = require('../middlewares/jwt')

const produtos = require('../controllers/productController');

appRoute.post('/register', authcontroll.registe)
appRoute.post('/login', authcontroll.login)

appRoute.get('/produto', jwt.verificarToken, produtos.produto)
appRoute.post('/produto',jwt.verificarToken,produtos.criarProduto)
module.exports = appRoute