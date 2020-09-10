const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const mongoose = require('mongoose'); //must require('mongoose') before attempting to invoke it
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
const CatSchema = new mongoose.Schema({ //this is more of a theoretical structure, so now make an object to actually have interactions that are needed
    name: {type: String, required:true, minlength: 3},
    kind: {type: String, required:true, minlength: 3},
    year: {type: Number, required:true, minlength: 2},
}, {timestamps: true})
const Cat = mongoose.model('Cat', CatSchema) //creates the collection out of this model const variable and model name can be anything but good practice to have both match. now can make the post route to retrieve the data

app.get('/', (request,response) => { //the route for the index page
    Cat.find()
    .then(submittedCatData => {
        console.log('This is the get function that displays all the cats submitted via form', submittedCatData)
        response.render('catsIndex', {submittedCatData: submittedCatData})
    })
    .catch(errors =>{
        console.log(errors)
        res.json(errors)
    })
})

app.get('/cats/new', (request, response) => { //the route for the form
    response.render('catsNew')
})

app.get('/cats/:id', (request, response) => { //the route for the specific cat 
    Cat.findOne({_id:request.params.id}) //function that retrieves an object by its id
    // console.log(request.params.id);
        .then(specificCatData => {
            console.log("This is the show function tha displays the data of a specific cat by its id", specificCatData)
            response.render('catsShow', {specificCatData: specificCatData})
        })
})

app.post('/cats', (request,response) => { //the route that processes the submitted form
    const submittedCat = new Cat();
    submittedCat.name = request.body.name //this is getting the submitted data from the ejs file
    submittedCat.kind = request.body.kind //this is getting the submitted data from the ejs file
    submittedCat.year = request.body.year //this is getting the submitted data from the ejs file
    submittedCat.save() // important to save because this is what actually gets the data into the database
        .then(submittedCatData => { //variable of what is being saved in the promise
            console.log('entry submitted', submittedCatData)
            response.redirect('/')
        })
        .catch(errors =>{
            console.log(errors)
            response.json(errors)
            // response.redirect('/cats/new')
        })
        // .catch(err=>{
            // console.log('The errors are displayed here', err)
            // for (var i in err.errors) {
                // request.flash('catsNew', err.errors[i].message)
            // }
        // })
})

app.get('/cats/edit/:id', (request, response) => { //the route that renders the edit form
    // Cat.findOneAndUpdate({_id: request.params.id},{$set:{name:request.body.name}},{$set:{kind:request.body.kind}},{$set:{year:request.body.year}},{new:true}) //function that retrieves an object by its id
    Cat.findOne({_id: request.params.id}) //function that retrieves an object by its id    
        .then(updateSpecificCatData => {
            console.log("This is the edit function tha displays the data of a specific cat by its id", updateSpecificCatData)
            response.render('catsEdit', {updateSpecificCatData: updateSpecificCatData})
        })
})

app.post('/cats/:id', (request, response) => { //the route that processes the edit form
    Cat.findOne({_id: request.params.id}) //function that retrieves an object by its id    
        .then(updateSpecificCatData => {
            updateSpecificCatData.name = request.body.name //this is getting the submitted data from the ejs file
            updateSpecificCatData.kind = request.body.kind //this is getting the submitted data from the ejs file
            updateSpecificCatData.year = request.body.year //this is getting the submitted data from the ejs file
            updateSpecificCatData.save() // important to save because this is what actually gets the data into the database. . save method returns a promise
            .then(updateSpecificCatData => { // have to handle the .save promise to actually get the saved data from the database (line of code above) to the application
                console.log("This is the edit function tha displays the data of a specific cat by its id", updateSpecificCatData)
                response.redirect('/')
            })
            .catch(errors => { // always need a .catch for a .then
                console.log("errors", errors)
            })
        })
        .catch(errors => { //always need a .catch for a .then
            console.log("errors", errors)
        })
})

app.get('/cats/destroy/:id', (request, response) => {
    Cat.findOne({_id: request.params.id})
        .then(deleteSpecificCatData => {
            deleteSpecificCatData.remove() //.remove returns a promise
            response.redirect('/')
        })
        .catch(errors => { //always need a .catch for a .then
            console.log("errors", errors)
        })
})

app.listen(8000, () => {
    console.log('listening on port 8000')
});