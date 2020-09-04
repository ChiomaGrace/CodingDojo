const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname + '/views') //directs to the views folder where all the ejs files are

//The below code is all the routes

app.get('/cats', (request, response) => { //code for the route
    response.render('cats')
});

app.get('/garfield', (request, response) => { //code for the route
    let catsArray = [
        {name: "Garfield", kind: "cynical orange persian/tabby", year: "1988"},
    ];
    response.render('specificCatInfo', {cats: catsArray})
});

app.get('/sylvester', (request, response) => { //code for the route
    let catsArray = [
        {name: "Sylvester", kind: "anthropomorphic tuxedo", year: "1940"},
    ];
    response.render('specificCatInfo', {cats: catsArray})
});


app.get('/tom', (request, response) => { //code for the route
    let catsArray = [
        {name: "Tom", kind: "grey and white mute domestic shorthair", year: "1940"},
    ];
    response.render('specificCatInfo', {cats: catsArray})
});

app.get('/catFromCatDog', (request, response) => { //code for the route
    let catsArray = [
        {name: "Cat", kind: "marigold cat with a shade of marigold spots", year: "1998"},
    ];
    response.render('specificCatInfo', {cats: catsArray})
});

//The above code is all the routes

app.listen(8000, () => {
    console.log('listening on port 8000')
});