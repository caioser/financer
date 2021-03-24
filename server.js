const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/financer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.error("ERRO: "+error.message);
});

// Carregando todos os models
require('./models/Regis');

const app = require('./app');
app.set('port', 4733);
const server = app.listen(app.get('port'), ()=>{
    let onPort = "Servidor rodando na porta: "+server.address().port;
    let tstamp = new Date().toLocaleTimeString('en-GB');
    console.log(onPort+'\nat: '+tstamp);
});