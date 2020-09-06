const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const session = require('express-session'); //many session modules but this one is specific to express

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object
app.use(session({ //now tell express about session
    secret: 'counterSecret', //uses this string to hash the cookie before sending to the user
    resave: false, //this prohibits the cookie from being resaved unless there is another request/response made.
    saveUninitialized: true, //this creates a cookie for the user even if no data is set initially
    cookie: { maxAge: 60000 } //cookie has many attributes that can be added/adjusted. maxAge is in miliseconds. if the cookie the coder provided is older than this, then the cookie is invalid.
}))

app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname + '/views') //directs to the views folder where all the ejs files are

//the below code is the routes

app.get('/', (request,response) => {
    if(request.session.counter == undefined) { // == undefined instead of !(request.session.counter) because otherwise would stay in the loop because it's "falsy"
        request.session.counter = 1
    }
    else {
        request.session.counter ++
        console.log("The user has viewed this page", request.session.counter, "time(s).")
    }
    counter = request.session.counter
    response.render('counter', {counter: counter})
});

app.post('/addTwoViews', (request,response) =>{
    request.session.counter +=1 //because I am redirecting to the index that is already adding a value, can just add and not two otherwise it would add a total of 3
    console.log("This is the route for adding two views to to the counter.", request.session.counter)
    response.redirect('/')
})

app.post('/reset', (request,response) =>{
    request.session.counter = 0 
    console.log("This is the route for resetting the views of the counter.", request.session.counter)
    response.redirect('/')
})

//the above code is the routes

app.listen('5000', () => {
    console.log('listening on port 5000')
});