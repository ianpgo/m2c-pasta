var menu = [];

exports.addMenu = function(){
	menu.push(this); 
}

exports.getMenu = function(){
	return menu; 
}

var Pasta = function(name, noodle, sauce){
	this.name = name;
	this.noodle = noodle; 
	this.sauce = sauce; 
};

module.exports.menu;
module.exports = Pasta; 

