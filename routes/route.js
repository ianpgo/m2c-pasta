var pasta = require('../models/pasta.js');

exports.getPasta = function(request, response) {
console.log(user);
response.end("The user is "+user.username+" and the requested info is "+user.userinfo+" with value "+user.uservalue);
// response.end("The user is "+request.temp.username+" and the requested info is "+request.temp.userinfo+" and the value is "+request.temp.uservalue);
}

exports.putPasta = function(request, response) {

// var menu = new menu();
var temp = new pasta.Pasta(request.params.name, request.params.noodle, request.params.sauce);

// menu.add(temp);

// console.log(menu);
console.log(temp);

module.exports.menu; 
response.end("Adding the pasta "+temp.name+" and the noodle"+temp.noodle+" with sauce "+user.sauce);

}


// 	function user(username,userinfo,uservalue){
// 	this.username = username;
// 	this.userinfo = userinfo;
// 	this.uservalue = uservalue;
// }


// var temp = new user(request.params.username, request.params.userinfo, request.params.uservalue);