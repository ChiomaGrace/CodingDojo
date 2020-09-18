const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()) //needed to use postman with json objects
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/RRAngApp/dist/RRAngApp"))

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/APITasks?retryWrites=true&w=majority') 

require('./server/config/routes')(app)

app.listen(8000, () => {
    console.log("Listening on port 8000")
})