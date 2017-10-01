require("../models/Genre");

const express = require('express');
const router = express.Router();

const GenreController = require('../controllers/GenreController');

router.get('/genre', GenreController.getGenres);

router.post('/genre', GenreController.addGenre);

module.exports = router;
