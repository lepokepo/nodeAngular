const mongoose = require('mongoose')
Schema = mongoose.Schema

let ServicoModel = new Schema({
    descricao: { type: String, required: true },
    prest_id: { type: String, required: true },
    user_id: { type: String, required: true },
    titulo: { type: String, required: true },
    req_date: { type: Date, required: true },
    local: { type: String, required: true },
    avaliacao: { type: Number },
    accept_date: { type: Date },
    done_date: { type: Date },
    valor: { type: Number },
}, { collection: 'servicos', versionKey: false })

module.exports = mongoose.model('Servico', ServicoModel)