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

module.exports.getGenre = function(req, res) {
  const _id = req.params._id;
  Genre.findById(_id, (err, genre) => {
    if (err){
      res.send(err);
    }else {
      res.json(genre);
    }
  });
};

module.exports.addGenre = (req, res) => {
  const body = req.body;
  Genre.create(body, function(err, genre){
      if(err){
          throw err;
      }else {
          res.json(genre);
      }
  });
};

module.exports.updateGenre = (req, res) => {
  const body = req.body;
  const _id = req.params._id;
  const query = {_id};
  const update = {name: body.name};
  Genre.findOneAndUpdate(query, update, {new: true}, (err, genre) => {
    if(err){
      throw err;
    }else {
      res.json(genre);
    }
  });
};
