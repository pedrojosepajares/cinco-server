exports.parse = function (deck){
    var cards = deck.cards.slice();
    switch(deck.name) {
        case "Baraja clásica":
            var suits = ["p", "t", "d"];
            for (suit of suits)
                for (n = 1; n <= deck.cards.length; n++)
                    cards.push({name: n+suit, text:deck.cards[n-1].text});
        break;
    }
    var newDeck = {name: deck.name, cards: cards};
    return newDeck;
}