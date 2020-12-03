var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var recipesController = require('./controllers/recipes');
var cors = require('cors');

var app = express();
 
app.use(cors({
	origin: '*'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.send('Hello API');
});

app.get('/recipes', recipesController.all);

app.get('/recipes/:id', recipesController.findById);

app.post('/recipes', recipesController.create);

app.put('/recipes/:id', recipesController.update);

app.delete('/recipes/:id', recipesController.delete);

db.connect('mongodb://localhost:27017/myapi', function(err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('API app started');
	});
});
