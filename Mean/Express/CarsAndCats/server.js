const express = require("express")
const app = express()
app.get("/", (request, response) => {
    response.send("Hello Express")
})
app.listen(8000,() => console.log("listening on port 800"))
app.use(express.static(__dirname + "/static"));
// app.get("/mustang.jpg", (request, response) => {
//     res.sendFile(path.join(__dirname, "./images/mustang.jpg"));
// });