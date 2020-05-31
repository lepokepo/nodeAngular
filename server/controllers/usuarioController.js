const Usuario = require('../models/Usuario'),
    bcrypt = require('bcrypt')

exports.salvar = (req, res, next) => {
    let u = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(u.senha, salt, (err, hash) => {
            if (err) return reject(err)
            u.senha = hash

            Usuario.create(u, (error, usuario) => {
                res.json(usuario)
            })
        });
    });
}