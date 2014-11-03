function Menu(){
	this.menu = [];
}

var Pasta = function(name, noodle, sauce){
	this.name = name;
	this.noodle = noodle; 
	this.sauce = sauce; 
};

Menu.prototype.getMenu = function(){
	return this.menu;
}

Menu.prototype.findPasta = function(name){
	for(int i = 0; i<this.menu.length; i++)
	{
		if(menu[i].name==name)
		{
			return menu[i];
		}
	}
}

Menu.prototype.createPasta = function(name, noodle, sauce){
	var tempPasta = new Pasta(name,noodle,sauce);
	this.menu.push(tempPasta);
}

// Menu.protoype.findPasta = function(name){
// 	for menu
// }

module.exports.menu;
module.exports = Pasta; 

