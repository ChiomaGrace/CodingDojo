const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const mongoose = require('mongoose'); //must require mongoose before attempting to invoke it

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/QuotingDojo?retryWrites=true&w=majority', {useNewUrlParser: true}); //the method that connects the app to the database and allows the ability to create a structure/schema
const QuoteSchema = new mongoose.Schema({ //this is more of a theoretical structure, so now make an object to actually have interactions that are needed
    name: String,
    quote: String,
})
const Quote = mongoose.model('Quote', QuoteSchema) //creates the collection out of this model const variable and model name can be anything but good practice to have both match. now can make the post route to retrieve the data


app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname +'/views') //directs to the views folder where all the ejs files are

app.get('/', (request,response) => {
    response.render('newQuote')
})

app.post('/quote/new', (request,response) => {
    const submittedQuote = new Quote();
    submittedQuote.name = request.body.name //this is getting the submitted data from the ejs file
    submittedQuote.quote = request.body.quote //this is getting the submitted data from the ejs file
    submittedQuote.save() // important to save because this is what actually gets the data into the database
        .then(submittedQuoteData => {
            console.log('entry submitted', submittedQuoteData)
            response.redirect('/quotes')
        })
        .catch(errors=>{
            console.log(errors)
            response.redirect('/')
        })
})

app.get('/quotes', (request,response) =>{
    Quote.find().sort( { quote: -1 } ) // The .sort orders it by descending order
        .then(submittedQuoteData => {
            console.log('This is the get function', submittedQuoteData)
            response.render('quotes', {submittedQuoteData: submittedQuoteData})
        })
        .catch(errors=> {
            res.json(errors)
        })
})

app.listen(8000, () => {
    console.log('listening on port 8000')
});