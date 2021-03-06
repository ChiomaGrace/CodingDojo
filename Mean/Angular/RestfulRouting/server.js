const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/RRAngApp/dist/RRAngApp"))

mongoose.connect('mongodb+srv://ChiomaGrace:Stanford9@chiscluster.tgldx.mongodb.net/APITasks?retryWrites=true&w=majority') //is this needed?

// app.use(session({ // in order to use session //Do i need this to get task data on different routes??
//     secret: "shh",
//     resave: false,
//     saveUninitialized: true,
//     cookies: {maxAge: 60000}
// }))

require('./server/config/routes')(app)

app.listen(8000, () => {
    console.log("Listening on port 8000")
})