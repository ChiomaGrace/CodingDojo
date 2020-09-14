const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const mongoose = require('mongoose'); //must require mongoose before attempting to invoke it

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/QuotingDojo?retryWrites=true&w=majority', {useNewUrlParser: true}); //the method that connects the app to the database and allows the ability to create a structure/schema

app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname +'/views') //directs to the views folder where all the ejs files are

require('./server/config/routes')(app)

app.listen(8000, () => {
    console.log('listening on port 8000')
});