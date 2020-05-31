require('dotenv').config();

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    authVerify = require('./middlewares/authVerify'),
    authRoutes = require('./routes/authRoutes'),
    usuarioRoutes = require('./routes/usuarioRoutes'),
    db = require('./services/Database')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(authRoutes)//rota de login
app.use(authVerify)//valida o token
app.use('/usuario', usuarioRoutes)


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server rodando no port", port);
})


