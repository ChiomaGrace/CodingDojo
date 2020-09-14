// this contains all the routes that then directs to the correct response depending on the url request

const cats = require('../controllers/cats') //this links the logic and ejs files

module.exports = function(app) { //links to the server file

    app.get('/', (request,response) => { //the route for the index page
        cats.index(request, response) //from the cats controller
    })

    app.get('/cats/new', (request, response) => { //the route for the form
        cats.new(request, response)
    })

    app.get('/cats/:id', (request, response) => { //the route for the specific cat 
        cats.show(request, response)
    })

    app.post('/cats', (request,response) => { //the route that processes the submitted form
        cats.create(request, response)
    })

    app.get('/cats/edit/:id', (request, response) => { //the route that renders the edit form
        cats.edit(request, response)
    })
    
    app.post('/cats/:id', (request, response) => { //the route that processes the edit form
        cats.update(request, response)
    })
    
    app.get('/cats/destroy/:id', (request, response) => {
        cats.destroy(request, response)
    })

}