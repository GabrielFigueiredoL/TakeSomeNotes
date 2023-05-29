const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './models/database.sqlite'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}