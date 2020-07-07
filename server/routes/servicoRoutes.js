const express = require('express'),
    router = express.Router(),
    servicoController = require('../controllers/servicoController'),
    permit = require('../middlewares/permission')

//add
router.post('/novo', permit('user'), servicoController.salvar)//cadastra novo servico

//listas
router.get('/todo-list', permit('prestador'), servicoController.listarTodo)//solicitadas
router.get('/ongoing-list', permit('prestador'), servicoController.listarOngoing)//ativas
router.get('/avalia-list', permit('user'), servicoController.listarAvaliacao)//pro user avaliar

//acoes de user e prestador
router.patch('/aceita', permit('prestador'), servicoController.aceita)
router.patch('/finaliza', permit('prestador'), servicoController.finaliza)
router.patch('/recusa', permit('prestador'), servicoController.recusa)
router.patch('/avalia', permit('user'), servicoController.avalia)

module.exports = router