const mongoose = require('mongoose')
Schema = mongoose.Schema

let CategoriaModel = new Schema({
    nome: { type: String, required: true, unique: true },
}, { collection: 'categorias', versionKey: false })

module.exports = mongoose.model('Categoria', CategoriaModel)