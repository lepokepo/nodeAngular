const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/usuarioController')

router.post('/', userController.salvar)// POST /usuario/

module.exports = router