const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express

app.use(express.static(__dirname + '/helloAngular/dist/helloAngular')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object
app.use(express.json())

app.get('/', (request,response) => { //the route for the index page

})

app.listen(8000, () => {
    console.log('listening on port 8000')
});