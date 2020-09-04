const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/static'))
app.use(express.urlencoded({extended: true})); //in order to access POST data and have the ability to retrieve it from the request object
app.use(session({
    secret: 'counterSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

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

app.listen('5000', () => {
    console.log('listening on port 5000')
});