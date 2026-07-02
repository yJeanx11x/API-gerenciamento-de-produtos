const db = require('../config/database')
const order = db.sequelize.define('Pedidos', {
    userId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    ProdutoId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    quantidade: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    total: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: db.Sequelize.ENUM('PENDENTE', 'PAGO','CANCELADO'),
        allowNull: false,
        defaultValue: 'PENDENTE'
    },
})

module.exports = { order }