const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/authController'),
    categoriaController = require('../controllers/categoriaController'),
    userController = require('../controllers/usuarioController'),
    prestController = require('../controllers/prestadorController')

//rotas que nao precisam de autenticacao
router.post('/login', authController.login)

//PRESTADORES
router.get('/lista-prest', prestController.listar)//pega lista de prestadores
router.post('/novo-prest', prestController.salvar)// POST /prestador/

//CATEGORIAS
router.get('/lista-cat', categoriaController.listar)//pega lista de categorias
router.get('/lista-cat-qnt', categoriaController.listaQnt)//pega lista de categorias com a quantidade

//USUARIOS
router.post('/novo-user', userController.salvar)// POST /usuario/


module.exports = router