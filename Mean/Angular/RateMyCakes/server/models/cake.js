const mongoose = require('mongoose')
const {ratingSchema} = require('../models/rating') //gives the ability to be used in line 6

const cakeSchema = new mongoose.Schema({
    bakerName: {type: String, require: true},
    cakeImage: {type: String, require: true},
    ratings: [ratingSchema] //this represents the one to many relationships. A cake can have many ratings
}, {timestamps: true})


const Cake = mongoose.model('Cake', cakeSchema)

module.exports = {
    Cake: Cake,
    cakeSchema: cakeSchema
}