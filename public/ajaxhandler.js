
$("#Fbutton").click(function(){

  var name = $("#Fname").val(); //takes number of name from form

    $.getJSON("/pastafind/"+name,function(data){ 
      $("#responseArea").html(data);
    })
});

$("#Cbutton").click(function(){

  var name = $("#Cname").val(); //takes number of innings from form
  var noodle = $("#Cnoodle").val(); //takes number of runs from form 
  var sauce = $("#Csauce").val();

    $.getJSON("/pasta/"+name+"/"+noodle+"/"+sauce,function(data){ 
      $("#responseArea").html(data);
    })
});

$("#Ubutton").click(function(){

  var oldname = $("#Uoldname").val();
  var newname = $("#Unewname").val(); //takes number of innings from form
  var noodle = $("#Unoodle").val(); //takes number of runs from form 
  var sauce = $("#Usauce").val();

    $.getJSON("/pasta/"+oldname+"/"+newname+"/"+noodle+"/"+sauce,function(data){ 
      $("#responseArea").html(data);
    })
});

$("#Dbutton").click(function(){

  var name = $("#Dname").val(); //takes number of name from form

    $.getJSON("/pastadelete/"+name,function(data){ 
      $("#responseArea").html(data);
    })
});