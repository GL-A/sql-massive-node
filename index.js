// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config');

var app = module.exports = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var productsCtrl = require('./productsCtrl');

app.post('/api/projects', productsCtrl.create);
app.get('/api/projects', productsCtrl.getProducts);
app.get('/api/projects/:ID', productsCtrl.getOneGuy);
app.put('/api/projects/:ID', productsCtrl.updateGuy);
app.delete('/api/projects/:ID', productsCtrl.deleteGuy);


// LISTEN
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
