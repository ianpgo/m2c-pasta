var menuMod = require('../models/pasta.js');
var Qs = require('qs');

var menu = new menuMod();

exports.getPasta = function(request, response) {
	var pasta = menu.findPasta(request.params.name);
	response.send(pasta);
}

exports.putPasta = function(request, response) {
	menu.createPasta(request.params.name, request.params.noodle, request.params.sauce);
	console.log(menu.getMenu());
	var pasta = menu.findPasta(request.params.name);
	console.log(pasta);
	response.send(pasta);
}

exports.postPasta = function(request, response) {
	menu.updatePasta(request.params.oldname, request.params.newname, request.params.noodle, request.params.sauce);
	console.log(menu.getMenu());
	var pasta = menu.findPasta(request.params.newname);
	response.send(pasta);
}

exports.deletePasta = function(request, response) {
	var pasta = menu.findPasta(request.params.name);
	menu.deletePasta(request.params.name);

	response.send(pasta);
}

