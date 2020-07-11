const Servico = require('../models/Servico'),
    moment = require('moment')

// listagem pro user q mostra os servico q foram aceitos e finalizados
exports.listarAvaliacao = (req, res, next) => {
    let user_id = res.locals.usuario._id
    Servico.find({ user_id, accept_date: { $ne: null }, done_date: { $ne: null }, avaliacao: { $eq: null } }, (err, listaServ) => {
        if (err) return res.status(500).send({ msg: 'moio' })

        if (listaServ) {
            let lista = []
            for (let index = 0; index < listaServ.length; index++) {
                let s = listaServ[index].toObject();
                if (s.req_date) s.req_date = moment(s.req_date.toString()).format('LLL')
                if (s.done_date) s.done_date = moment(s.done_date.toString()).format('LLL')
                if (s.accept_date) s.accept_date = moment(s.accept_date.toString()).format('LLL')
                lista.push(s)
            }
            console.log(lista);
            res.json(lista)
        }

    })

}

//listagem simples
exports.listarTodo = (req, res, next) => {
    let prest_id = res.locals.usuario._id
    Servico.find({ prest_id, accept_date: null, done_date: null }, (err, listaServ) => {
        if (err) return res.status(500).send({ msg: 'moio' })

        if (listaServ) {
            let lista = []
            for (let index = 0; index < listaServ.length; index++) {
                let s = listaServ[index].toObject();
                if (s.req_date) s.req_date = moment(s.req_date.toString()).format('LLL')
                if (s.done_date) s.done_date = moment(s.done_date.toString()).format('LLL')
                if (s.accept_date) s.accept_date = moment(s.accept_date.toString()).format('LLL')
                lista.push(s)
            }
            console.log(lista);
            res.json(lista)
        }

    })

}
//listagem de servicos em andamento
exports.listarOngoing = (req, res, next) => {
    let prest_id = res.locals.usuario._id
    // {$eq: } = equals | {$ne: } = not equals 
    Servico.find({ prest_id, accept_date: { $ne: null }, done_date: { $eq: null } }, (err, listaServ) => {
        if (err) return res.status(500).send({ msg: 'moio' })

        if (listaServ) {
            let lista = []
            for (let index = 0; index < listaServ.length; index++) {
                let s = listaServ[index].toObject();
                if (s.req_date) s.req_date = moment(s.req_date.toString()).format('LLL')
                if (s.done_date) s.done_date = moment(s.done_date.toString()).format('LLL')
                if (s.accept_date) s.accept_date = moment(s.accept_date.toString()).format('LLL')
                lista.push(s)
            }
            console.log(lista);
            res.json(lista)
        }

    })

}

//recusa servico
exports.recusa = (req, res, next) => {
    let { _id } = req.body

    let done_date = moment().format()
    Servico.findOneAndUpdate({ _id }, { done_date, accept_date: null }, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}

//avalia servico
exports.avalia = (req, res, next) => {
    let { _id, avaliacao } = req.body

    Servico.findOneAndUpdate({ _id }, { avaliacao }, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}

//finaliza servico
exports.finaliza = (req, res, next) => {
    let { _id, valor } = req.body

    done_date = moment().format()
    Servico.findOneAndUpdate({ _id }, { done_date, valor }, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}
// aceita servico
exports.aceita = (req, res, next) => {
    _id = req.body.id_serv
    console.log(_id);

    accept_date = moment().format()
    console.log(accept_date, _id);
    Servico.findOneAndUpdate({ _id }, { accept_date }, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}
//solicita um novo servico
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