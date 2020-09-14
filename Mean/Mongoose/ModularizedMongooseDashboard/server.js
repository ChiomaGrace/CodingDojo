// this is the main server that is listening for requests and then responses to the requests.

const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const mongoose = require('mongoose'); //must require('mongoose') before attempting to invoke it (invoked on line 19)
const session = require('express-session'); //mist require('express-session') before attempting to invoke it

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object
app.use(session({ // in order to use session
    secret: "session to display invalid entry errors",
    resave: false,
    saveUninitialized: true,
    cookies: {maxAge: 60000}
}))

app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname +'/views') //directs to the views folder where all the ejs files are

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/MongooseDashboard?retryWrites=true&w=majority', {useNewUrlParser: true}); //the method that connects the app to the database and allows the ability to create a structure/schema

require('./server/config/routes')(app) //this tells the server.js file where the routes file is. passing the app function gives functionality to the route.js file. put the require statement at the bottom so everything needed in the app (session, views, etc) are called before the app function

app.listen(8000, () => {
    console.log('listening on port 8000')
});