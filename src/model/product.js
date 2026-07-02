const db = require('../config/database')
const Product = db.sequelize.define('Product', {
    userId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    descricao: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: db.Sequelize.DECIMAL(10, 2),
        allowNull: false,

    },
    estoque: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = { Product }