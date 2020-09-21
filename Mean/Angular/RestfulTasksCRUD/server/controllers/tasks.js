//the controller obtains the functionality of all the features for the website

const { response } = require('express'); //automated
const {Task} = require('../models/task') //this links the models which is called on in the logic in these functions

module.exports = {
    allTasks: (request, response) => {
        console.log("Server Index Function")
        Task.find() // since I am calling on the model here, I need to tell this controller about the models
        .then(submittedTaskData => {
            response.json(submittedTaskData )
        })
        .catch(errors =>{
            console.log(errors)
            response.json(errors)
        })
    },

    create: (request, response) => {
        console.log("Request Body", request.body)
        const submittedTask = new Task(); //creates the document instance
        submittedTask.title = request.body.title;
        submittedTask.description = request.body.description
        submittedTask.save() // important to save because this is what actually gets the data into the database
            .then(submittedTaskData => {
                console.log(submittedTaskData)
                response.json(submittedTaskData)
            })
            .catch(errors =>{
                console.log(errors)
                response.json(errors)
            })
    },

    show: (request, response) => {
        Task.findOne({_id:request.params.id})
        .then(submittedTaskData => {
            console.log("Server Show Function")
            response.json(submittedTaskData)
        })
    },

    update: (request, response) => {
        console.log("The beginning of the Server Update function")
        Task.findOne({_id: request.params.id})   
        .then(updateSpecificTaskData => {
            updateSpecificTaskData.title = request.body.title 
            updateSpecificTaskData.description = request.body.description 
            updateSpecificTaskData.save() 
            .then(updateSpecificTaskData => { 
                console.log("Update Function", updateSpecificTaskData)
                response.json(updateSpecificTaskData)
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
        Task.findOne({_id: request.params.id})
        .then(deleteSpecificTaskData => {
            deleteSpecificTaskData.remove()
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