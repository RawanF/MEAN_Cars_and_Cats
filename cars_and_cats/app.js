var http = require('http');
var fs = require('fs');


const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/form.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/car1.jpg') {
        fs.readFile('./images/car1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/car3.jpeg') {
        fs.readFile('./images/car3.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/car4.jpg') {
        fs.readFile('./images/car4.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat4.jpg') {
        fs.readFile('./images/cat4.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    // if request didn't match anything:
    else {
        response.writeHead(404);
        response.end('Sorry, the requested URL is not available');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");