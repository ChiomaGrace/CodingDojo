
const {Cake} = require('../models/cake')
const {Rating} = require('../models/rating')

module.exports = {
    createCake: (request, response) => {
        console.log("This is the create function in the controller with the submitted data:", request.body)
        const submittedCake = new Cake();
        submittedCake.bakerName = request.body.bakerName
        submittedCake.cakeImage = request.body.cakeImage
        submittedCake.save()
            .then(submittedCakeData => {
                console.log("This line of code is the promise of the create function", submittedCakeData)
            })
            .catch(errors =>{
                response.json(errors)
            })
    },

    allCakes: (request, response) => {
        console.log("This is the all cakes function in the controller")
        Cake.find()
        .then(submittedCakeData => {
            response.json(submittedCakeData)
        })
        .catch(errors => {
            console.log(errors)
            response.json(errors)
        })
    },

    rateCake: (request, response) =>{
        console.log("******",request.body)
        console.log("!!!!", request.params)
        submittedRating = new Rating()
        submittedRating.rating = request.body.cakeRating //needs to match the name on the form html
        submittedRating.comment = request.body.cakeComment
        console.log("$$$", submittedRating)
        submittedRating.save() // the above code is normal -> get the form data
        .then(submittedRatingForm => {
            console.log("submitting rating form", submittedRatingForm)
            Cake.findById(request.params.cakeId) //this links the rating(data) to its associated cake
            .then(submittedCakeData => {
                submittedCakeData.ratings.push(submittedRatingForm) //the rating attribute is an array, so it has the ability to push 
                console.log("submittedCakeData", submittedCakeData)
                submittedCakeData.save()
                .then(updatedCakeData =>{
                    console.log("updated cake:", updatedCakeData)
                    response.json(updatedCakeData)
                })
                .catch(errors => {
                    console.log(errors)
                    response.json(errors)
                })
            })
            .catch(errors => {
                console.log(errors)
                response.json(errors)
            })
        })
        .catch(errors => {
            console.log(errors)
            response.json(errors)
        })  
    },

    showCake: (request, response) =>{
        Cake.findById(request.params.cakeId)
        .then(specificCake =>{
            response.json(specificCake)
        })
        .catch(errors =>{
            response.json(errors)
        })
    }


}
