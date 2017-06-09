var port = 3000;
var dbUrl = "mongodb://localhost/",
    dbName = "decks";

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// JSON Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// Conexión con la base de datos
mongoose.connect(dbUrl+dbName, function(err, res){
    if (err) console.log("ERROR: can't connect to database (" + err + ")");
    else console.log("Connected to database " + dbName );
});

// Direccionamiento
var routes = require('./api/routes/cinco-server-routes');
app.use(routes);



app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
