const Usuario = require('../models/Usuario.js'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

// nao
//busca user
exports.login = (req, res, next) => {
    let { email, senha } = req.body

    console.log(email, senha)

    if (!email || !senha) return res.status(401).send('Informe email ou senha')

    Usuario.findOne({ email }, (error, usuario) => {
        if (error) return next(error)
        if (!usuario) return res.status(401).send('Usuário não encontrado')

        //verifica hash da senha
        bcrypt.compare(senha, usuario.senha, (err, match) => {
            if (!match) return res.status(401).send('Usuário não encontrado')

            //gera token
            const token = jwt.sign({
                usuario: {
                    _id: usuario._id
                }
            }, process.env.SECRET_JWT, { expiresIn: '1d' });
            res.json({
                usuario: {
                    nome: usuario.nome,
                    email: usuario.email
                },
                token
            })
        })
    })
}
