const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true,
    },
    savedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Favourite', favouriteSchema);