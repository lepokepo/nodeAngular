const Prestador = require('../models/Prestador'),
    Servico = require('../models/Servico'),
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

    //se tiver 
    Prestador.find({ servicos: c ? c : { $ne: null } }, (error, lista) => {
        if (error) return res.status(500).json({ msg: 'moio' })

        //lista com prest_id
        Servico.aggregate([{
            $group:
            {
                _id: '$prest_id',
                media: { $avg: '$avaliacao' }
            }
        }], (err, listaMedia) => {
            if (err) return res.status(500).json({ msg: 'moio' })

            let listaFinal = []
            console.log(lista);

            //percorre a lista de prestadores
            for (let index = 0; index < lista.length; index++) {
                const prest = lista[index].toObject();

                //percorre a lista com as medias dos servicos
                for (let index = 0; index < listaMedia.length; index++) {
                    const servMedia = listaMedia[index];
                    //se o item com o id do prestador pego la em cima for igual ao do item aqui debaixo, vai adicionar na listaFinal
                    if (prest._id == servMedia._id) {
                        if (servMedia.media != null) {
                            prest.avaliacao = servMedia.media
                        } else {
                            prest.avaliacao = 0
                        }
                    }
                }
                listaFinal.push(prest)
            }
            res.json(listaFinal)
        })
    })
}