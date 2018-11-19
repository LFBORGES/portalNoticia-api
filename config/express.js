var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

module.exports = function () {
  var app = express();
  //var router = express.Router();

  app.set('port', 3000);
  app.set('ip', 'localhost');

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.all('/ping', (req,res)=>{
    res.send( {pong:'ok'} );
  });

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};