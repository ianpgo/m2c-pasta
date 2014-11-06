var menuMod = require('../models/pasta.js');
var Qs = require('qs');

var menu = new menuMod();

exports.getPasta = function(request, response) {
	//stores pasta object of found pasta
	if (typeof request.params.name !== 'undefined') { 
		var pasta = menu.findPasta(request.params.name);
		response.send(pasta); //sends pasta object to client
	}
	else if (typeof request.params.name === 'undefined') {
		var pastaList = menu.getMenu();
		response.send(pastaList);
	}
	else {
		response.send("Error Brah")
	}
}

exports.putPasta = function(request, response) {
	//creates pasta object
	menu.createPasta(request.params.name, request.params.noodle, request.params.sauce);
	//stores created pasta object
	var pasta = menu.findPasta(request.params.name);
	response.send(pasta); //sends created pasta object to client
}

exports.postPasta = function(request, response) {
	//updates pasta object
	menu.updatePasta(request.params.oldname, request.params.newname, request.params.noodle, request.params.sauce);
	//stores updated pasta object
	var pasta = menu.findPasta(request.params.newname);
	response.send(pasta); //sends updated pasta object to client
}

exports.deletePasta = function(request, response) {
	//stores to be deleted pasta object
	var pasta = menu.findPasta(request.params.name);
	menu.deletePasta(request.params.name);//deletes pasta object

	response.send(pasta);//sends deleted pasta object to client
}

