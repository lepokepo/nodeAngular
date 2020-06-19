module.exports = permit = (...allowed) => {

    return (req, res, next) => {
        console.log('PRECISA: ', allowed);
        let { usuario } = res.locals
        if (usuario) {
            console.log('CONTEM: ', usuario.roles);

            for (let i = 0; i < usuario.roles.length; i++) {
                const role = usuario.roles[i];
                if (allowed.indexOf(role) >= 0) {
                    console.log('permitido');
                    return next()
                }
            }
        }
        
        res.status(403).send('Sem permissão')
    }
}