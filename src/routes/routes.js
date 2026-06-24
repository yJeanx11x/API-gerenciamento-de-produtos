const express=require('express');
const appRoute=express.Router()
const authcontroll=require('../controllers/authController')

appRoute.post('/register',authcontroll.registe)
appRoute.post('/login',authcontroll.login)


module.exports=appRoute