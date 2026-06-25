const express=require('express');
const appRoute=express.Router()
const authcontroll=require('../controllers/authController')
const jsonwt=require('../middlewares/jwt') 

appRoute.post('/register',authcontroll.registe)
appRoute.post('/login',authcontroll.login)

appRoute.get('/teste',jsonwt.verificarToken,authcontroll.logout)
module.exports=appRoute