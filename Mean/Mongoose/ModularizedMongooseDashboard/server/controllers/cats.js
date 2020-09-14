//the controller obtains the functionality of all the features for the website

const {Cat} = require('../models/cat') //this links the models which is called on in the logic in these functions

module.exports = {
    index: (request, response) => {
        Cat.find() // since I am calling on the model here, I need to tell this controller about the models
        .then(submittedCatData => {
            console.log('This is the get function that displays all the cats submitted via form', submittedCatData)
            response.render('catsIndex', {submittedCatData: submittedCatData})
        })
        .catch(errors =>{
            console.log(errors)
            res.json(errors)
        })
    },

    new: (request, response) => {
        response.render('catsNew')
    },

    show: (request, response) => {
        Cat.findOne({_id:request.params.id}) //function that retrieves an object by its id
        // console.log(request.params.id);
        .then(specificCatData => {
            console.log("This is the show function tha displays the data of a specific cat by its id", specificCatData)
            response.render('catsShow', {specificCatData: specificCatData})
        })
    },

    create: (request, response) => {
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
            // })
    },

    edit: (request, response) => {
        Cat.findOne({_id: request.params.id}) //function that retrieves an object by its id    
        .then(updateSpecificCatData => {
            console.log("This is the edit function tha displays the data of a specific cat by its id", updateSpecificCatData)
            response.render('catsEdit', {updateSpecificCatData: updateSpecificCatData})
        })
    },

    update: (request, response) => {
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
    },

    destroy: (request, response) => {
        Cat.findOne({_id: request.params.id})
        .then(deleteSpecificCatData => {
            deleteSpecificCatData.remove() //.remove returns a promise
            response.redirect('/')
        })
        .catch(errors => { //always need a .catch for a .then
            console.log("errors", errors)
        })
    }


}