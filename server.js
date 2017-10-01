const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/routes');
require("./api/models/Genre");

const server = express();

server.use(express.static('public'));

server.set('view engine', 'ejs');

// Change mongoose to connect to your database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookstore');

// Body Parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api', routes);


server.get('/', (req, res) => {
  res.render('index');
});

server.listen(8080, () => {
  console.info("Express listening on port: ", 8080);
});
