var router = require('express').Router();
var db = require('./../db');

/* GET index page. */
router.get('/', function(req, res) {
    db.getRepository('beers').all().then(function(data) {
        res.send(data);
    });
});

module.exports = router;