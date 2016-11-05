var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Get Sequelized
var models = require('./models');
var sequelizeConnection = models.sequelize;

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
    return sequelizeConnection.sync({force:true})
})

// Create initial burger values
.then(function(){
    return models.Burgers.create(
        {
            burger_name: 'Old Fashioned Hamburger'
        }
    )
})
.then(function(){
    return models.Burgers.create(
        {
            burger_name: 'Green Chile Chesseburger'
        }
    )
})
.then(function(){
    return models.Burgers.create(
        {
            burger_name: 'Bacon Mountain Burger'
        }
    )
})
.then(function(){
    return models.Burgers.create(
        {
            burger_name: 'Onion Garlic Explosion Burger'
        }
    )
})


// make public files available
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// override POST having ?_method=PUT (for individual burger "Eat!" buttons)
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Grab routing
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Start App
app.listen(PORT, function() {
    console.log('Server now listening on port ' + PORT);
});

