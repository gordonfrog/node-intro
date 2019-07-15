// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// const PORT = 5000

// http.createServer(function (req, res) {
// 	var q = url.parse(req.url, true);
// 	var filename = "./index.html";
// 	// var filename = "." + q.pathname;
// 	// if (filename == './') {filename = './index';}
	
// 	// filename = filename + ".html";
// 	console.log(filename);
// 	fs.readFile(filename, function(err, data) {
// 		if (err) {
// 			res.writeHead(404, {'Content-Type': 'text/html'});
// 			return res.end("404 Not Found");
// 		} 
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.write(data);
// 		return res.end();
// 	});
	
// }).listen(PORT);


// console.log("Server Listening on Port 5000...");

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	//var filename = "." + q.pathname;
	var filename = "./index.html";
	fs.readFile(filename, function(err, data) {
		if (err) {
			fs.readFile('error.html', function(err, errorstuff) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(errorstuff);
		    return res.end();
		  });
		} 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(5002);


console.log("Server Listening on Port 5002...");
