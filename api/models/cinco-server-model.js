var mongoose = require('mongoose');
var schema = mongoose.Schema;

var deckSchema = new schema({
    name: String,
    cards: [{name: String, text: String}]
})

module.exports = mongoose.model('deck', deckSchema);