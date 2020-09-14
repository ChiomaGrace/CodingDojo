const {Quote} = require('../models/quote') //this links the models which is called on in the logic in these functions

module.exports = {
    new: (request, response) => {
        response.render('newQuote')
    },

    create: (request, response) => {
        const submittedQuote = new Quote();
        submittedQuote.name = request.body.name //this is getting the submitted data from the ejs file
        submittedQuote.quote = request.body.quote //this is getting the submitted data from the ejs file
        submittedQuote.save() // important to save because this is what actually gets the data into the database
        .then(submittedQuoteData => { //variable of what is being saved in the promise
            console.log('entry submitted', submittedQuoteData)
            response.redirect('/quotes')
            })
            .catch(errors=>{
                console.log(errors)
                response.redirect('newQuote') //same as "/"
            })
    },

    show: (request, response) => {
        Quote.find().sort( { quote: -1 } ) // The .sort orders it by descending order
        .then(submittedQuoteData => {
            console.log('This is the get function', submittedQuoteData)
            response.render('quotes', {submittedQuoteData: submittedQuoteData})
        })
        .catch(errors=> {
            res.json(errors)
        })
    },

}