const Prestador = require('../models/Prestador'),
    bcrypt = require('bcrypt')

exports.salvar = (req, res, next) => {
    let prest = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(prest.senha, salt, (err, hash) => {

            if (err) return reject(err)
            prest.senha = hash

            Prestador.create(prest, (error, prest) => {
                res.json(prest)
            })
        });
    });

}

exports.listar = (req, res, next) => {

    let c = req.query.cat
    if (c) {
        Prestador.find({ servicos: c }, (error, lista) => {
            if (error) return res.status(500).json({ msg: 'moio' })
            if (lista) return res.json(lista)
        })
    } else {
        Prestador.find({ roles: 'prestador' }, (error, lista) => {
            if (error) return res.status(500).json({ msg: 'moio' })
            if (lista) return res.json(lista)
        })
    }
}