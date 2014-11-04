var Menu = require('../models/pasta.js');
var Qs = require('qs');

exports.getPasta = function(request, response) {
	//idk if this is called this way?
	var pasta = Menu.Menu.findPasta(request.params.name);
	response.end("The Pasta is " + pasta.name + " which is made with " + pasta.noodle 
		+ " with the sauce " + pasta.sauce);
}

exports.putPasta = function(request, response) {
	Menu.menu.createPasta(response.params.name, response.params.noodle, response.params.sauce);
	response.end("Adding the pasta "+response.params.name+ " which is made with " +
			response.params.noodle+" with sauce "+response.params.sauce);
}

exports.postPasta = function(request, response) {
	var pasta = Menu.menu.updatePasta(response.params.oldname, response.params.newname, 
		response.params.noodle, response.params.sauce);
	response.end("Updating the pasta "+response.params.oldname+ "to " + pasta.name +  " which is made with " +
			pasta.noodle+" with sauce "+pasta.sauce);

}

exports.deletePasta = function(request, response) {
	var pasta = Menu.Menu.findPasta(request.params.name);
	Menu.Menu.deletePasta(request.params.name);
	response.end("The Pasta you DELETED is " + pasta.name + " which is made with " + pasta.noodle 
		+ " with the sauce " + pasta.sauce);
}

