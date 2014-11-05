var menuMod = require('../models/pasta.js');
var Qs = require('qs');

var menu = new menuMod();

exports.getPasta = function(request, response) {
	//idk if this is called this way?
	var pasta = menu.findPasta(request.params.name);
	response.end("The Pasta is " + pasta.name + " which is made with " + pasta.noodle 
		+ " with the sauce " + pasta.sauce);
}

exports.putPasta = function(request, response) {
	menu.createPasta(request.params.name, request.params.noodle, request.params.sauce);
	console.log(menu.getMenu());
	response.end("Adding the pasta "+request.params.name+ " which is made with " +
			request.params.noodle+" with sauce "+request.params.sauce);
}

exports.postPasta = function(request, response) {
	menu.updatePasta(request.params.oldname, request.params.newname, request.params.noodle, request.params.sauce);
	console.log(menu.getMenu());
	response.end("Updating the pasta "+request.params.oldname + " to " + request.params.newname +  " which is made with " +
			request.params.noodle+" with sauce "+request.params.sauce);

}

exports.deletePasta = function(request, response) {
	var pasta = menu.findPasta(request.params.name);
	menu.deletePasta(request.params.name);
	response.end("The Pasta you DELETED is " + pasta.name + " which is made with " + pasta.noodle 
		+ " with the sauce " + pasta.sauce);
	console.log(menu.getMenu());
}

