const {Author} = require('../models/author') //the linking of the model file (database) and the controller

module.exports = {
    new: (req,res) => {
        console.log('author controller(new)')
        const submittedAuthor = new Author()
        submittedAuthor.name = req.body.name
        submittedAuthor.save()
        .then((newAuthorData)=>{
            res.json(newAuthorData)
        })
        .catch(err=>res.json(err))
    },
    getAll

    // create: (req,res) =>{ //could also write it like this. doesn't matter
    //     console.log('author controller')
    // },

}