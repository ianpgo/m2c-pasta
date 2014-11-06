var express = require("express");
var morgan = require('morgan');
var pastaRoutes = require('./routes/route.js');

var app = express();
/*
 * Upon receiving a GET request of the path /hi,
 * do the callback that sends as the response "hello world"
 */

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

// Set the views directory
app.set('views', __dirname + '/views');

// Define the view (templating) engine
app.set('view engine', 'ejs');


app.get("/pastaFind/:name?", pastaRoutes.getPasta);

app.put("/pastaCreate/:name/:noodle/:sauce", pastaRoutes.putPasta);

app.post("/pastaUpdate/:oldname/:newname/:noodle/:sauce", pastaRoutes.postPasta);

app.delete("/pastaDelete/:name", pastaRoutes.deletePasta);

  app.listen(50000);
console.log("Server listening at http://localhost:50000/");