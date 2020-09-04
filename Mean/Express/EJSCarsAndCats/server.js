const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname + '/views') //directs to the views folder where all the ejs files are

//The below code is all the routes

app.get('/cars', (request, response) => { //code for the route
    response.render('cars')
});

app.get('/cats', (request, response) => { //code for the route
    response.render('cats')
});

app.get('/cars/new', (request, response) => { //code for the route
    response.render('newCar')
});

//The above code is all the routes

app.listen(8000, () => {
    console.log('listening on port 8000')
});