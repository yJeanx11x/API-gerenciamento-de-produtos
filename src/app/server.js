require('dotenv').config()
const express=require('express');
const erroGlobal=require('../middlewares/errorMiddleware')
const routas=require('../routes/routes')
const app=express()
app.use(express.json())
app.use(erroGlobal)
app.use(routas)

app.listen(process.env.PORT,()=>{
    console.log('Servidor rodando com sucesso!')
})