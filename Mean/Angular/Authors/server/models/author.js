const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [4, "Author name needs to be longer than three characters"]}
}, {timestamps: true})

const Author = mongoose.model('Author', authorSchema)

module.exports = {
    Author: Author,
    authorSchema: authorSchema
}