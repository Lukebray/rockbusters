const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var random = require('mongoose-simple-random');

const RockbusterSchema = new Schema({
    clue: {
        type: String, 
        required: true,
    },
    initials: {
        type: String, 
        required: true,
    },
    answer: {
        type: String, 
        required: true,
    },
    source: {
        type: String,
        required: false,
    },
    series: {
        type: Number,
        required: false,
    },
    episode: {
        type: Number,
        required: false,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});
RockbusterSchema.plugin(random);

module.exports = mongoose.model('Rockbuster', RockbusterSchema);