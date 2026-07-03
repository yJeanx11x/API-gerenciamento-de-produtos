const db = require('../config/database')
const { Product } = require('../model/product')
const { order } = require('../model/order')

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
User.hasMany(Product, { foreignKey: 'userId' })

Product.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(order, { foreignKey: 'userId' })

order.belongsTo(User, { foreignKey: 'userId' })

Product.hasMany(order, { foreignKey: 'ProdutoId' })

order.belongsTo(Product, { foreignKey: 'ProdutoId' })

async function dataBase() {
    try {
        await User.sync({ force: false })
        await Product.sync({ force: false })
        await order.sync({ force: false })
        console.log('Tabelas criadas com sucesso')
    } catch (error) {
        console.log('erro na criação de tabela', error)
    }
}
dataBase()
module.exports = { User }