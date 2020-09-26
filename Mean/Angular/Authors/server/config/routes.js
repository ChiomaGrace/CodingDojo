const Authors = require("../controllers/authors")

module.exports = function(app) {
    app.get('/', (request,response) => {

    }),

    app.post('/new', (request,response)=> {
        console.log(Authors,"$$$$")
        Authors.createAuthor(request, response)
    }),

    app.get('/authors',(request,response) => {
        Authors.allAuthors(request, response)
    }),

    app.put('/authors/:id',(request,response) => {
        Authors.updateAuthor(request, response)
    })

    app.get('/authors/:id', (request, response) =>{
        Authors.specificAuthor(request,response)
    })

    app.delete('/authors/:id', (request, response) => {
        Authors.delete(request, response)
    })
}