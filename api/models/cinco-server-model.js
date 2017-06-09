var mongoose = require('mongoose');
var schema = mongoose.Schema;

var deckSchema = new schema({
    name: String,
    deck: [{name: String, text: String, img: String}]
})

module.exports = mongoose.model('decks', deckSchema);