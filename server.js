const express = require('express');
const apiRouter = require('./api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'ejs');

// import config from './config';
// import express from 'express';
// import apiRouter from './api';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

// Change mongoose to connect to your database
mongoose.connect('mongodb://localhost/bookstore');

server.use('/api', apiRouter);


server.get('/', (req, res) => {
  res.render('index');
});

server.listen(8080, () => {
  console.info("Express listening on port: ", 8080);
});
