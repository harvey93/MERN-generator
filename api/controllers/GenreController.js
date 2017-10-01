const mongoose = require('mongoose');
const Genre = mongoose.model('Genre');

module.exports.getGenres = function(req, res) {
  Genre.find((err, genre) => {
    if (err){
      res.send(err);
    }else {
      res.json(genre);
    }
  });
};

module.exports.addGenre = (req, res) => {
  const genre = req.body;
  Genre.create(genre, function(err, genre){
      if(err){
          throw err;
      }else {
          res.json(genre);
      }
  });
};
// app.post('/api/genres', function(req, res){
//     var genre = req.body;
    // Genre.addGenre(genre, function(err, genre){
    //     if(err){
    //         throw err;
    //     }else {
    //         res.json(genre);
    //     }
    // });
// });
