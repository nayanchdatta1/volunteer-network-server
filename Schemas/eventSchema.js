const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = eventSchema;