var controller = require('../controllers/cinco-server-controller');
var express = require('express'),
    router = express.Router();

router.route('/decks')
    .get(controller.findAll)
    .post(controller.add);

router.route('/decks/:id')
    .get(controller.find)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;