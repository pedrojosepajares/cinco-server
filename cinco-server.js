var port = 3000;

var express = require('express'),
    app = express(),
    router = express.Router();

router.get('/', function(req, res){
    res.send("Hello World!");
});

app.use(router);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
