// this contains all the routes that then directs to the correct response depending on the url request

const tasks = require('../controllers/tasks') //this links the logic(controller) and ejs files

module.exports = function(app){
    app.get('/', (request, response) => {
        tasks.index(request, response)
    }),

    app.post('/tasks', (request, response) => {
        tasks.create(request, response)
    })

    app.get('/tasks/:id', (request,response) => {
        tasks.show(request, response)
    })

    app.put('/tasks/:id', (request, response) => {
        tasks.update(request, response)
    })

    app.delete('/tasks/:id', (request, response) => {
        tasks.delete(request, response)
    })

}