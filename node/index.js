const express = require('express')
const bodyParser = require('body-parser')
const comandos = require('./models/comandosDataBase')
const cors = require('cors')



//Se conecta na porta localhost:3000
const app = express()
app.listen('3000')

app.use(cors());

//Configurando o Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//create
app.route('/criar-nota').post(comandos.createNote)
//read
app.route('/').get(comandos.getNotes)
app.route('/editar-nota/:id').get(comandos.getNote)
//update
app.put('/editar-nota/:id', comandos.updateNote)
//delete
app.route('/editar-nota/:id').delete(comandos.deleteNote)
// CRUD
