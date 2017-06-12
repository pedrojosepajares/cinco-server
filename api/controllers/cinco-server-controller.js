var mongoose = require('mongoose');
var deckModel = require('../models/cinco-server-model');

// GET - Devuelve todas las barajas en la BD
exports.findAll = function(req, res){

  // Cabecera para recibir peticiones desde todos los orígenes
  res.setHeader('Access-Control-Allow-Origin', '*');

  deckModel.find(function(err, decks){
    if (err) res.send(500, err.mesaage);
    console.log('GET /decks');
    res.status(200).jsonp(decks);
  });
};

// GET - Devuelve una baraja especificando con ID
exports.find = function(req, res){

  // Cabecera para recibir peticiones desde todos los orígenes
  res.setHeader('Access-Control-Allow-Origin', '*');

  deckModel.findById(req.params.id, function(err, deck){
    if(err) return res.send(500, err.message);
    console.log('GET /deck/' + req.params.id);
    res.status(200).jsonp(deck);
  });
};

// POST - Inserta una baraja en la BD
exports.add = function(req, res){

  // Cabecera para recibir peticiones desde todos los orígenes
  res.setHeader('Access-Control-Allow-Origin', '*');

  console.log('POST');
  console.log(req.body);

  var deck = new deckModel({
    name: req.body.name,
    cards: req.body.cards
  })

  deck.save(function(err, deck){
    if (err) return res.status(500).send(err.mesaage);
    res.status(200).jsonp(deck);
  });
};

// PUT- Actualiza una baraja existente
exports.update = function(req, res){

  // Cabecera para recibir peticiones desde todos los orígenes
  res.setHeader('Access-Control-Allow-Origin', '*');

  console.log('PUT /deck/' + req.params.id);
  deckModel.findById(req.params.id, function(err, deck){
    deck.name = req.body.name;
    deck.cards = req.body.cards;
  
    deck.save(function(err){
      if (err) return res.status(500).send(err.mesaage);
      res.status(200).jsonp(deck);
    });
  });


};

// DELETE- Elimina una baraja
exports.delete = function(req, res){
  console.log('DELETE /deck/' + req.params.id);
  deckModel.findById(req.params.id, function(err, deck){
    deck.remove(function(err){
      if (err) return res.status(500).send(err.mesaage);
      res.status(200).send();
    });
  }); 
};


