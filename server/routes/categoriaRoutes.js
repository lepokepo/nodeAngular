const express = require('express'),
    router = express.Router(),
    categoriaController = require('../controllers/categoriaController'),
    permit = require('../middlewares/permission')

router.post('/nova', permit('adm'), categoriaController.salvar)//cadastra nova categoria, somente adms

module.exports = router