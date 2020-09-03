const http = require('http') //module that provides the ability to build a web server that accepts HTTP requests and can serve responses

const fs = require('fs') // module that provides the ability to read and write content from files. fs stands for file system

const server = http.createServer(function(request,response){ // module that creates the webserver
    console.log("This is the server. The parameter is a callback function with a request(made by the client) and response(what the coder/me providers) parameter. If the request doesn't exist then an error will be sent back.")
    
    if(request.url == '/') { // code that creates the routes
        fs.readFile('index.html', 'utf8', function(errors, contents){ //this line is the file system. fs is reading an index html, utf8(gives the ability for the code to be seen in multiple alphabets/languages) 
            response.writeHead(200, {'Content-Type': 'text/html'}) 
            response.write(contents)
            response.end()
        })
    } 

    else if(request.url == '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){ //this line is the file system. fs is reading an index html, utf8(gives the ability for the code to be seen in multiple alphabets/languages) 
            response.writeHead(200, {'Content-Type': 'text/html'}) 
            response.write(contents)
            response.end()
        })
    }

    else if(request.url == '/dojos/new'){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){ //this line is the file system. fs is reading an index html, utf8(gives the ability for the code to be seen in multiple alphabets/languages) 
            response.writeHead(200, {'Content-Type': 'text/html'}) 
            response.write(contents)
            response.end()
        })
    }

    else {
        response.end('Sorry, file not found :(');
    }
    
})

server.listen(6789) //This provides which port on the web browser the content will be shown
console.log("Running on port 6789")