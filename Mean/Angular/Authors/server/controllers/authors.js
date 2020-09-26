const {response} = require('express')
const {Author} = require('../models/author')

module.exports = {
    createAuthor: (request, response) => {
        console.log("The create function in the controller receiving the request body", request.body)
        submittedAuthor = new Author()
        submittedAuthor.name = request.body.name
        submittedAuthor.save()
            .then(submittedAuthorData => {
                console.log("This is the .then of the create function in the controller saving the data", submittedAuthorData)
                response.json(submittedAuthorData)
            })
            .catch(errors => {
                console.log("Errors", errors)
                response.json(errors)
            })

    },

    allAuthors: (request, response) => {
        Author.find()
        .then(allAuthorsData => {
            console.log("The all authors function in the controller grabbing all the submitted data", allAuthorsData)
            response.json(allAuthorsData)
        })
        .catch(errors => {
            console.log("Errors", errors)
            response.json(errors)
        })
    },

    specificAuthor: (request, response) => {
        Author.findById(request.params.id)
        .then(data =>{
            response.json(data)
        })
        .catch(errors => {
            response.json(errors)
        })
    },

    updateAuthor: (request, response) => {
        console.log("The beginning of the Server Update function")
        Author.findOne({_id: request.params.id})   
        .then(updateSpecificAuthorData => {
            updateSpecificAuthorData.name = request.body.name 
            updateSpecificAuthorData.save() 
            .then(updateAuthorData => { 
                console.log("Update Function", updateAuthorData)
                response.json(updateAuthorData)
            })
            .catch(errors => { 
                console.log("errors", errors)
                response.json(errors)
            })
        })
        .catch(errors => {
            console.log("errors", errors)
            response.json(errors)
        })
    },

    delete: (request, response) => {
        console.log("The beginning of the Server Delete function")
        Author.findOne({_id: request.params.id})
        .then(deleteSpecificAuthorData => {
            deleteSpecificAuthorData.remove()
            .then(data => {
                console.log("Sever Delete Function Data:", data)
                response.json(data)
            })
            .catch(errors => { 
                console.log("errors", errors)
                response.json(errors)
            })
        })
        .catch(errors => {
            console.log("errors", errors)
            response.json(errors)
        })
    },
}