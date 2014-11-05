
//constructor of menu class, defines pasta object 
function Menu(){
	this.menu = [];
}

	var Pasta = function(name, noodle, sauce){
	this.name = name;
	this.noodle = noodle; 
	this.sauce = sauce; 
	};

//returns menu array of pastas
Menu.prototype.getMenu = function(){
	return this.menu;
}

//returns pasta object searched by name
Menu.prototype.findPasta = function(name){
	for(var i = 0; i<this.menu.length; i++)
	{
		if(this.menu[i].name == name)
		{
			return this.menu[i];
		}
	}
}

//returns index of pasta object searched by name
Menu.prototype.indexOfPasta = function(name){
	return this.menu.indexOf(this.findPasta(name));
}

//creates a new pasta object and inserts into array
Menu.prototype.createPasta = function(name, noodle, sauce){
	var tempPasta = new Pasta(name,noodle,sauce);
	this.menu.push(tempPasta);
	return this.getMenu();
}

//deletes pasta object by name
Menu.prototype.deletePasta = function(name){
	var index = this.indexOfPasta(name);
	if(index > -1){
		this.menu.splice(index,1);
	}
	return this.getMenu();
}

//updates pasta object in array by name
Menu.prototype.updatePasta = function(oldName, newName, newNoodle, newSauce){
	var tempPasta = new Pasta(newName,newNoodle,newSauce);
	var index = this.indexOfPasta(oldName);

	this.menu[index]=tempPasta;

	return this.menu[index];
}

module.exports = Menu;

