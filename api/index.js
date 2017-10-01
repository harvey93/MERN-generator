var express = require('express');

const router = express.Router();
const Genre = require('./models/Genre');

module.exports = router.get('/genre', (req, res) => {
  Genre.getGenres((err, genres) => {
    if(err){
      throw err;
    }else {
      res.json(genres);
    }
  });
});
