const mongoose = require('mongoose')
Schema = mongoose.Schema

let ServicoModel = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    user_id: { type: String, required: true },
    prest_id: { type: String, required: true },
    local: { type: String, required: true },
    req_date: { type: Date, required: true },
    done_date: { type: Date },
}, { collection: 'servicos', versionKey: false })

module.exports = mongoose.model('Servico', ServicoModel)