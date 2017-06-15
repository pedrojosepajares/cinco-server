var port = 3000;
var dbUrl = "mongodb://mongo/",
    dbName = "decks",
    dbPort = ":27017"
    decksFile = "./json/decks.json"

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jsonfile = require('jsonfile');
    
var routes = require('./api/routes/cinco-server-routes'),
    deckModel = require('./api/models/cinco-server-model');

// JSON Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// Conexión con la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl+dbName+dbPort, function(err, res){
    if (err) console.log("ERROR: can't connect to database (" + err + ")");
    else{
        console.log("Connected to database " + dbName );
        jsonfile.readFile(decksFile, function(err, obj){
            if (err) console.log("ERROR: can't read decks at " + decksFile);
            else{

                var deck = new deckModel({
                    name: obj.name,
                    cards: obj.cards
                })

                deck.save(function(err, deck){
                    if (err) console.log("ERROR: can't save decks at database");
                    else console.log("Decks saved at database");  
                });
            }    
        });
    }
});

// Direccionamiento
app.use(routes);

app.listen(port, function(){
    
    console.log("Server running on localhost:" + port);

});
