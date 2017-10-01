// const GenreRoutes = require('./GenreRoutes');
//
// module.exports.GenreRoutes = GenreRoutes;
//
// const mongoose = require('mongoose');
//
// module.exports = (app) => {
//   const GenreController = require('../controllers/GenreController');
//   app.route('/genre')
//     .get(GenreController.getGenres);
// };

require("../models/Genre");

const express = require('express');
const router = express.Router();

const GenreController = require('../controllers/GenreController');

router.get('/genre', GenreController.getGenres);

module.exports = router;
