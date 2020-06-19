require('dotenv').config();

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    authVerify = require('./middlewares/authVerify'),
    authRoutes = require('./routes/authRoutes'),

    usuarioRoutes = require('./routes/usuarioRoutes'),
    categoriaRoutes = require('./routes/categoriaRoutes'),
    servicoRoutes = require('./routes/servicoRoutes'),

    db = require('./services/Database')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
//rotas publicas
app.use(authRoutes)//rota de login
app.use(authVerify)//valida o token
//rotas autenticadas
app.use('/usuario', usuarioRoutes)
app.use('/categoria', categoriaRoutes)
app.use('/servico', servicoRoutes)


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server rodando no port", port);
})


