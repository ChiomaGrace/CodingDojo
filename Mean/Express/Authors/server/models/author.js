const { Mongoose } = require("mongoose");
const authors = require("../../controllers/authors");

const mongoose = require('mongoose')

const Author = new mongoose.model('Author', AuthorSchema)

const AuthorSchema = new mongoose.Schema( {
    name: {type: String, required: true, minlength: 10}
})

module.exports = {
    Author: Author,
    AuthorSchema: AuthorSchema
}