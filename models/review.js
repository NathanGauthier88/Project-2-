const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },
        location: String,
        brewery: String,
        img: String,
        name: String, 
        style: String,
        abv: { type: Number, min: 0 },
        reviewBody: String,
        score: { type: Number, min: 0, max: 5 }
    }
)

module.exports = mongoose.model('Review', reviewSchema)
