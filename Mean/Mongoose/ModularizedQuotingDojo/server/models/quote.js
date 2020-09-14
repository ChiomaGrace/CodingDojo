// this is the model that creates an object representation of the data in the database

const mongoose = require('mongoose'); //must require('mongoose') before attempting to invoke (okay to have here and on server.js file because it only runs once)

const QuoteSchema = new mongoose.Schema({ //this is more of a theoretical structure, so now make an object to actually have interactions that are needed
    name: String,
    quote: String,
})

const Quote = mongoose.model('Quote', QuoteSchema) //creates the collection out of this model const variable and model name can be anything but good practice to have both match. now can make the post route to retrieve the data

module.exports = {
    Quote: Quote, //exporting the cat model on line 7. The key (word before the:) is how it is referenced/named in other files in the app
    QuoteSchema: QuoteSchema //always important to export the schema
}