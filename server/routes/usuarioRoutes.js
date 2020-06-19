const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/usuarioController'),
    permit = require('../middlewares/permission')



module.exports = router