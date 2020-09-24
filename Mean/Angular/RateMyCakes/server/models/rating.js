const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating: {type: String, required: true},
    comment: {type: String, required: true}
}, {timestamps: true})

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = {
    Rating: Rating,
    ratingSchema: ratingSchema
}