const db = require('./db')

const dataBase = db.sequelize.define('Notas', {
    titulo: {
        type: db.Sequelize.STRING,
    },
    conteudo: {
        type: db.Sequelize.TEXT,
    }
})

dataBase.sync()
module.exports = dataBase