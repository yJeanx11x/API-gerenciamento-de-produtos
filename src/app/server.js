require('dotenv').config()
const express=require('express');
const erroGlobal=require('../middlewares/errorMiddleware')
const routas=require('../routes/routes')
const app=express()
app.use(express.json())
app.use(routas)
app.use(erroGlobal)

app.listen(process.env.PORT,()=>{
    console.log('Servidor rodando com sucesso!')
})