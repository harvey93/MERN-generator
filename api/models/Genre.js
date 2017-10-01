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

module.exports = mongoose.model('Genre', genreSchema);
