const db = require('./db')

const dataBase = db.sequelize.define('Notas', {
    titulo: {
        type: db.Sequelize.STRING,
    },
    conteudo: {
        type: db.Sequelize.TEXT,
    },
    cor: {
        type: db.Sequelize.STRING
    },
    fonte: {
        type: db.Sequelize.STRING
    }
})

dataBase.sync()
module.exports = dataBase