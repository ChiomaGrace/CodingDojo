const { response } = require("express")
const { createCake } = require("../controllers/cakes")
const cakes = require('../controllers/cakes')

module.exports = function(app) {
    app.get('/', (request,response) => {
    })

    app.post('/cakes', (request, response) => {
        cakes.createCake(request, response)
    })

    app.get('/cakes', (request, response) => {
        cakes.allCakes(request,response)
    })

    app.post('/rateCake/:cakeId', (request, response) => {
        cakes.rateCake(request,response)
    })

    app.get('/cake/:cakeId', (request, response)=>{
        cakes.showCake(request,response)
    })

}