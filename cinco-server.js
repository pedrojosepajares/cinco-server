var port = 3000;
var dbUrl = "mongodb://localhost/",
    dbName = "decks";

var express = require('express'),
    app = express(),
    router = express.Router();
    mongoose = require('mongoose');

router.get('/', function(req, res){
    res.send("Hello World!");
});

app.use(router);

// Conexión con la base de datos
mongoose.connect(dbUrl+dbName, function(err, res){
    if (err) console.log("ERROR: can't connect to database (" + err + ")");
    else console.log("Connected to database " + dbName );
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
