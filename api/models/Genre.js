var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = function(callback){
    Genre.find(callback);
};
