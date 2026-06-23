require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})


try {
    sequelize.authenticate()
    console.log('A conexão foi estabelecida com sucesso.')
} catch (error) {
    console.log('Não foi possível conectar ao banco de dados:', erro)

}

module.exports={
    sequelize,
    Sequelize,
}