const http = require('http');

let server = http.createServer();

server.on('request', function(request, response) {
	console.log("Got request");
	response.end("Hello world");
});

server.listen(8080);

