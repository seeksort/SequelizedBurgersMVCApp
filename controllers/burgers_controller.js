var express = require('express');
var router = express.Router();
// Replaced old BurgerORM w/ Sequelize model
var models = require('../models');

// GET to localhost root
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    models.Burgers.findAll()
    .then(function(result){
        var burgerObj = {burgers:result};
        console.log(burgerObj);
        return res.render('index', burgerObj);
    });
});

// PUT to update burger 
router.put('/burgers/update/:id', function(req, res) {
    models.Burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(function(result){
        res.redirect('/burgers');
    });
});

// CREATE to add new burger from input box
router.post('/burgers/create', function(req, res) {
    models.Burgers.create({
        burger_name: req.body.burger_name
    })
    .then(function(){
        res.redirect('/burgers');
    });
});

module.exports = router;