var express = require('express');
var fs = require('fs');
var buff = new Buffer(256);
buff = fs.readFileSync("index.html");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buff.toString());
/*  response.send('Hello World2 and again and again!');*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
