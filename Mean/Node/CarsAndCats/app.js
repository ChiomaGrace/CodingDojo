const http = require('http') //module that provides the ability to build a web server that accepts HTTP requests and can serve responses

const fs = require('fs') // module that provides the ability to read and write content from files. fs stands for file system

const server = http.createServer(function(request,response){ // module that creates the webserver
    console.log("This is the server. The parameter is a callback function with a request(made by the client) and response(what the coder/me providers) parameter. If the request doesn't exist then an error will be sent back.")

    if(request.url === '/cars') { // code that creates the routes
        fs.readFile('./views/cars.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            console.log(errors) //how you can see errors
            response.write(contents)
            response.end()
        })
    }

    else if(request.url === '/images/mustang.jpg'){
        // do not need the utf8 encoding
        fs.readFile('./images/mustang.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            console.log(errors)
            response.write(contents);
            response.end();
        })
    }
    
    else if(request.url === '/images/mercedes.png'){
        // do not need the utf8 encoding
        fs.readFile('./images/mercedes.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    
    else if(request.url === '/images/civic.jpg'){
        // do not need the utf8 encoding
        fs.readFile('./images/civic.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

// the below code is for the cat html page

if(request.url === '/cats') { // code that creates the routes
    fs.readFile('./views/cats.html', 'utf8', function(errors,contents){
        response.writeHead(200, {'Content-Type': 'text/html'})
        console.log(errors) //how you can see errors
        response.write(contents)
        response.end()
    })
}

else if(request.url === '/images/garfield.png'){
    // do not need the utf8 encoding
    fs.readFile('./images/garfield.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        console.log(errors)
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/tom.png'){
    // do not need the utf8 encoding
    fs.readFile('./images/tom.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/sylvester.png'){
    // do not need the utf8 encoding
    fs.readFile('./images/sylvester.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

// the above code is for the cat html page

// the below code is for the car from html page

if(request.url === '/cars/new') { // code that creates the routes
    fs.readFile('./views/newCar.html', 'utf8', function(errors,contents){
        response.writeHead(200, {'Content-Type': 'text/html'})
        console.log(errors) //how you can see errors
        response.write(contents)
        response.end()
    })
}

// the above code is for the car from html page


})

server.listen(7077) //This provides which port on the web browser the content will be shown
console.log("Running in localhost at port 7077")