var express = require("express");
var morgan = require('morgan');
var pastaRoutes = require('./routes/route.js');
var pastaModel = require('./models/pasta.js');

var app = express();
/*
 * Upon receiving a GET request of the path /hi,
 * do the callback that sends as the response "hello world"
 */

app.use(morgan('common'))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.get("/hi", function (request, response) {
  response.end("hello world");
  });

app.get("/say",function (request,response){
	response.end(request.query.greeting + " " + request.query.to);
  });

app.get("/pastafind/:name", pastaRoutes.getPasta);

app.put("/pasta/:name/:noodle/:sauce", pastaRoutes.putPasta);

app.post("/pasta/:oldname/:newname/:noodle/:sauce", pastaRoutes.postPasta);

app.delete("/pastadelete/:name", pastaRoutes.deletePasta);


app.put("/hi", function (request, response) {
response.end("Hi route from PUT request");
  });

app.get("/bye", function (request, response) {
  response.end("Toodliedoo!");
  });

app.use(express.static(__dirname + '/public'));

  app.listen(50000);
console.log("Server listening at http://localhost:50000/");