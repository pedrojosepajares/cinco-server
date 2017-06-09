var mongoose = require('mongoose');
var deckModel = require('../models/cinco-server-model');

// GET - Devuelve todas las barajas en la BD
exports.findAll = function(req, res){
  res.send("findAll");  
};

// GET - Devuelve una baraja especificando con ID
exports.find = function(req, res){
  res.send("find");  
};

// POST - Inserta una baraja en la BD
exports.add = function(req, res){
  res.send("add");  
};

// PUT- Actualiza una baraja existente
exports.update = function(req, res){
  res.send("update");  
};

// DELETE- Elimina una baraja
exports.delete = function(req, res){
  res.send("delete");  
};


