const express=require('express');
const appRoute=express.Router()
const authcontroll=require('../controllers/authController')

appRoute.post('/register',authcontroll.registe)


module.exports=appRoute