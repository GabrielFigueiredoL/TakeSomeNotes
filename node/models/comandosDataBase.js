const dataBase = require("./dataBaseCreation")

const createNote = async (req, res) => {
    await dataBase.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
    }).then(function(){
        res.send('Nota adicionada com sucesso!')
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })
}

const getNotes = async (req, res) => {
    await dataBase.findAll().then(note => {
        res.send(note)
    }).catch((erro) => {
        res.send(erro)
    })  
}

const getNote = async (req, res) => {
    let id = parseInt(req.params.id)
    await dataBase.findAll({
        where: {
            id: id
        }
    }).then(note => {
        res.send(note)
    }).catch((erro) => {
        res.send(erro)
    })
}

const updateNote = async (req, res) => {
    let id = parseInt(req.params.id)
    let note = req.body
    await dataBase.update({
        titulo: note.titulo, 
        conteudo: note.conteudo,
    }, {
        where: {
            id: id
        }
    }).then(function(){
        res.send("Nota atualizada com sucesso!")
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })
}

const deleteNote = async (req, res) => {
    let id = parseInt(req.params.id)
    await dataBase.destroy({
        where: {
            "id": id
        }
    }).then(function(){
        res.send('Nota apagada com sucesso!')
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    })
}

module.exports = {
    createNote,
    deleteNote,
    getNotes,
    getNote,
    updateNote
}