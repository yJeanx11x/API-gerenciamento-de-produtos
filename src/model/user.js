const db = require('../config/database')
const User = db.sequelize.define('User', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: db.Sequelize.ENUM('user', 'admin'),
        defaultValue: 'user'
    },
    token: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }

})

try {
    User.sync({ force: true })
    console.log('Criando Tabela com sucesso')
} catch (error) {
    console.log('erro na criação de tabela', error)
}
module.exports = { User }