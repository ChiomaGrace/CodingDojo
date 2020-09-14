// this contains all the routes that then directs to the correct response depending on the url request

const quote = require('../controllers/quotes') //this links the logic and ejs files

module.exports = function(app) { //links to the server file

    app.get('/', (request,response) => {
        quote.new(request, response)
    })

    app.post('/quote/new', (request,response) => {
        quote.create(request, response)
    })
        
    app.get('/quotes', (request,response) =>{
        quote.show(request, response)
    })

}