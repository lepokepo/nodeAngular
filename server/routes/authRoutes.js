const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/authController')

router.post('/login', authController.login)

module.exports = router