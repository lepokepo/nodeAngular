const Prestador = require('../models/Prestador'),
    Categoria = require('../models/Categoria')

//listagem simples
exports.listar = (req, res, next) => {

    Categoria.find((err, listaCat) => {
        if (err) return res.status(500).send({ msg: 'moio' })
        if (listaCat) res.json(listaCat)
    })

}

exports.salvar = (req, res, next) => {
    c = req.body
    Categoria.create(c, (err, data) => {
        if (err) return res.status(500).json({ msg: "moio" })
        if (data) return res.json(data)
    })

}

//listagem com quantidade
exports.listaQnt = (req, res, next) => {
    Categoria.find(async (error, categorias) => {
        if (error) return res.status(500).json({ msg: 'moio' })
        let listaQnt = [];
        for (let i = 0; i < categorias.length; i++) {
            const categoria = categorias[i];
            //await precisa do metodo async, que espera a busca do banco pra fazer a funcao
            let qt = await Prestador.aggregate([{
                "$match": {
                    servicos: {
                        $in: [categoria.nome]
                    }
                }
            },
            { "$count": 'quantidade' }
            ])
            listaQnt.push({
                'categoria': categoria.nome,
                'quantidade': qt.length > 0 ? qt[0].quantidade : 0
            })
        }
        res.json(listaQnt)
    });
}