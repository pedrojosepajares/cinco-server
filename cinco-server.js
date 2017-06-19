var port = 3000;
var dbUrl = "mongodb://localhost/decks"
    //dbUrl = "mongodb://mongo/decks", URL para docker compose
    dbName = "decks",
    deckFile = "./json/decks.json";

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jsonfile = require('jsonfile');
    
var routes = require('./api/routes/cinco-server-routes'),
    deckModel = require('./api/models/cinco-server-model'),
    deckParser = require('./deck-parser/deck-parser');

// JSON Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// Conexión con la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, function(err, res){
    if (err) console.log("ERROR: can't connect to database (" + err + ")");
    else{
        console.log("Connected to database " + dbName );
        mongoose.connection.db.dropCollection(dbName);
        jsonfile.readFile(deckFile, function(err, obj){
            if (err) console.log("ERROR: can't read decks at " + decksFile);
            else{

                obj = deckParser.parse(obj);

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
