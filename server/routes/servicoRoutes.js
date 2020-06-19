const express = require('express'),
    router = express.Router(),
    servicoController = require('../controllers/servicoController'),
    permit = require('../middlewares/permission')

router.post('/novo', permit('user', 'adm'), servicoController.salvar)//cadastra novo servico
router.get('/todo-list', permit('prestador'), servicoController.listar)//lista os servicos de certo prestador

module.exports = router