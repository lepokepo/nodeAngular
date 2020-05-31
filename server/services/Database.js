const mongoose = require('mongoose'),
    db = mongoose.connection

mongoose.set('useCreateIndex', true);

db.on('error', console.error)
db.on('open', () => {
    console.log('mongo conectado');
})

mongoose.connect('mongodb://localhost:27017/servicos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db