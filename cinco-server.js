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
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl+dbName, function(err, res){
    if (err) console.log("ERROR: can't connect to database (" + err + ")");
    else console.log("Connected to database " + dbName );
});

// Direccionamiento
var routes = require('./api/routes/cinco-server-routes');
app.use(routes);

// Cabeceras
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
