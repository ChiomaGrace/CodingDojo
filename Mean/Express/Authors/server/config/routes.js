const Author = require.resolve('../controllers/authors'); //This tells the routes where to look for the controllers needed. Good coding principle to capitalize the variable

module.exports = function(app) {
    app.post('/new', (req,res) => {
        Author.new;
    });
    app.all("*", (req,res,next) => { //// this route will be triggered if any of the routes above did not match
        // res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}