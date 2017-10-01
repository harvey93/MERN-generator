require("../models/Genre");

const express = require('express');
const router = express.Router();

const GenreController = require('../controllers/GenreController');

router.get('/genre', GenreController.getGenres);

router.get('/genre/:_id', GenreController.getGenre);

router.post('/genre', GenreController.addGenre);

router.put('/genre/:_id', GenreController.updateGenre);

router.delete('/genre/:_id', GenreController.deleteGenre);
module.exports = router;
