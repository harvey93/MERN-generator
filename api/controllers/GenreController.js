const mongoose = require('mongoose');
const Genre = mongoose.model('Genre');

module.exports.getGenres = function(req, res) {
  Genre.find({}, function(err, genre) {
    if (err){
      res.send(err);
    }else {
      res.json(genre);
    }
  });
};
