var Recipes = require('../models/recipes');

/*
{
	name: "Pizza",
	photo: link,
	ingredients: "asdas, asdas, asdas, ads, asd, asd",
	time: "10 min"
	recipe: "Cut the tomatoes, shreder the cheese",	
}
*/
exports.all = function(req, res) {
	Recipes.all(function(err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	});
};

exports.findById = function(req, res) {
	Recipes.findById(req.params.id, function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});
};

exports.create = function(req, res) {
	var recipe = {
		name: req.body.name,
		photo: req.body.photo,
		ingredients: req.body.ingredients,
		time: req.body.time,
		recipe: req.body.recipe
	};
	Recipes.create(recipe, function(err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(recipe);
	});
};

exports.update = function(req, res) {
	Recipes.update(
		req.params.id,
		{
			name: req.body.name,
			photo: req.body.photo,
			ingredients: req.body.ingredients,
			time: req.body.time,
			recipe: req.body.recipe
		},
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};

exports.delete = function(req, res) {
	Recipes.delete(
		req.params.id,
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};
