// this is the model that creates an object representation of the data in the database

const mongoose = require('mongoose') //must require('mongoose') before attempting to invoke (okay to have here and on server.js file because it only runs once)

const TaskSchema = new mongoose.Schema({ //schema is more of a theoretical structure, so now make an object to actually have interactions that are needed
    title: {type: String, required: true},
    description: {type: String, required: true}
})

const Task = mongoose.model('Task', TaskSchema); //creates the collection out of this model const variable and model name can be anything but good practice to have both match. now can make the post route to retrieve the data

module.exports = {
    Task: Task, //exporting the task model on line 10. The key (word before the:) is how it is referenced/named in other files in the app
    TaskSchema: TaskSchema //always important to export the schema
}
