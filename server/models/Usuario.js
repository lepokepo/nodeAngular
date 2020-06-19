const mongoose = require('mongoose')
Schema = mongoose.Schema

let UsuarioModel = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    roles: { type: Array },
}, { collection: 'usuarios', versionKey: false })

module.exports = mongoose.model('Usuario', UsuarioModel)