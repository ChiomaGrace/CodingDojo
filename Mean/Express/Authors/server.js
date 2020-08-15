const express = require("express")
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + "/authorAngApp/dist/authorAngApp"))); //links the angular app
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/authors?retryWrites=true&w=majority', {useNewUrlParser: true});
// const db = mongoose.connection; //Daisy helped when mongoose error occurred thought I needed but don't
// db.once('open', () => console.log("connected to the db")) //Daisy helped when mongoose error occurred thought I needed but don't
// db.on('error', (error) => console.log('db errors', error)) //Daisy helped when mongoose error occurred thought I needed but don't
require('./server/config/routes')(app); //links all the route options of the app

app.listen( 8000, () => { //links the web browser
    console.log("listening on port 8000")
})