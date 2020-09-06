const express = require('express')
const app = express()
const session = require('express-session');
const ejs = require('ejs');
const axios = require('axios');
app.use(express.static(__dirname + "/static"))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'Secrets are no fun unless they are for everyone',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {

    res.render('index')
})


app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('https://swapi.dev/api/people/1')

    .then(data => {
        // log the data before moving on! 
        
        console.log(data);

        // rather than rendering, just send back the json data!
        res.json(data)
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});

app.listen(8000, () => console.log("listening on port 8000"));

// data: {
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//     homeworld: 'http://swapi.dev/api/planets/1/',
//     films: [
//       'http://swapi.dev/api/films/1/',
//       'http://swapi.dev/api/films/2/',
//       'http://swapi.dev/api/films/3/',
//       'http://swapi.dev/api/films/6/'
//     ],
//     species: [],
//     vehicles: [
//       'http://swapi.dev/api/vehicles/14/',
//       'http://swapi.dev/api/vehicles/30/'
//     ],
//     starships: [
//       'http://swapi.dev/api/starships/12/',
//       'http://swapi.dev/api/starships/22/'
//     ],
//     created: '2014-12-09T13:50:51.644000Z',
//     edited: '2014-12-20T21:17:56.891000Z',
//     url: 'http://swapi.dev/api/people/1/'
//   }
// }
