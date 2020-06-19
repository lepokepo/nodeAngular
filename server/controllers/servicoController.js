const Servico = require('../models/Servico'),
    moment = require('moment')

//listagem simples
exports.listar = (req, res, next) => {
    let prest_id = res.locals.usuario._id
    Servico.find({ prest_id }, (err, listaServ) => {
        if (err) return res.status(500).send({ msg: 'moio' })
        if (listaServ) res.json(listaServ)
    })

}

exports.salvar = (req, res, next) => {
    s = req.body
    s.user_id = res.locals.usuario._id
    s.req_date = moment().format()

    console.log(s);
    Servico.create(s, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}