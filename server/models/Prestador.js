const mongoose = require('mongoose')
Schema = mongoose.Schema

let PrestadorModel = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    cnpj: { type: String, required: true },
    servicos: { type: Array, required: true },
    roles: { type: Array },
}, { collection: 'usuarios', versionKey: false })

module.exports = mongoose.model('Prestador', PrestadorModel)