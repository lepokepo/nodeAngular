const jwt = require('jsonwebtoken');

module.exports = verify = (req, res, next) => {

    let token = req.get('Authorization')
    console.log(token);

    if (!token || !token.startsWith('Bearer ')) return res.status(401).send('Token inválido')


    token = token.replace('Bearer ', '')

    jwt.verify(token, process.env.SECRET_JWT, (err, authData) => {
        if (err) return res.status(401).send(err.message)

        res.locals.usuario = authData.usuario
        res.send({ msg: 'Token validado' })
        next()
    })


}