const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is a function that then invokes express
const session = require('express-session'); //this is a function that then invokes express

app.use(express.static(__dirname + '/static')) //directs to the static file folder and handles requests for static content
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object
app.use(session({ //now tell express about session
    secret: "Survey Form Secret", //uses this string to hash the cookie before sending to the user
    resave: false, //this prohibits the cookie from being resaved unless there is another request/response made.
    saveUninitialized: true, //this creates a cookie for the user even if no data is set initially
    cookies: {maxAge: 60000} //cookie has many attributes that can be added/adjusted. maxAge is in miliseconds. if the cookie the coder provided is older than this, then the cookie is invalid.
}))

app.set('view engine', 'ejs') //gives the ability to use the html (ejs)
app.set('views', __dirname +'/views') //directs to the views folder where all the ejs files are

app.get('/', (request,response) => {
    response.render('surveyForm')
})

app.post('/submittedForm', (request, response) =>{ 
    console.log("This is the submitted data from the form", request.body) //This shows the data that was submitted
    request.session.surveyForm = request.body //This puts the data in session, so it is accessible on other routes. surveyForm is what I called the key(could be named anything) for the entire request body object that it is set equal to
    // console.log(request.session.surveyForm)
    response.redirect('/result')
})

app.get('/result', (request, response) =>{
    // console.log(request.session.surveyForm)
    submittedFormData = request.session.surveyForm
    console.log(submittedFormData)
    response.render('result', {surveyForm: submittedFormData}) //have to have the object here in order to access it on the ejs file
});

app.listen(8000, () => {
    console.log('listening on port 8000')
});