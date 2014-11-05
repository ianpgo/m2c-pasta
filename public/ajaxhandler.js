$(function(){
  $("#findPasta").submit(function(event){

    var name = $("#Fname").val(); //takes number of name from form

      event.preventDefault();

      $.ajax({
        url:"/pastaFind/"+name,
        type:'GET',
        success: function(data){
          var resultName = data.name;
          var resultNoodle = data.noodle;
          var resultSauce = data.sauce; 
          $("#responseArea").html("Found a pasta named " +resultName+" with "+resultNoodle+" noodles and "+resultSauce+" sauce");
        }
      });
  });

  $("#createPasta").submit(function(event){

    var name = $("#Cname").val(); //takes number of innings from form
    var noodle = $("#Cnoodle").val(); //takes number of runs from form 
    var sauce = $("#Csauce").val();

        event.preventDefault();

      $.ajax({
        url:"/pastaCreate/"+name+"/"+noodle+"/"+sauce,
        type:'PUT',
        success: function(data){
          var resultName = data.name;
          var resultNoodle = data.noodle;
          var resultSauce = data.sauce; 
          $("#responseArea").html("Added a pasta named " +resultName+" with "+resultNoodle+" noodles and "+resultSauce+" sauce");
        }
      });
  });

  $("#updatePasta").submit(function(event){

    var oldname = $("#Uoldname").val();
    var newname = $("#Unewname").val(); //takes number of innings from form
    var noodle = $("#Unoodle").val(); //takes number of runs from form 
    var sauce = $("#Usauce").val();

      event.preventDefault();

      $.ajax({
        url:"/pastaUpdate/"+oldname+"/"+newname+"/"+noodle+"/"+sauce,
        type:'POST',
        success: function(data){
          var resultName = data.name;
          var resultNoodle = data.noodle;
          var resultSauce = data.sauce; 
          $("#responseArea").html("Updated pasta "+oldname+" with a pasta named " +resultName+" with "+resultNoodle+" noodles and "+resultSauce+" sauce");
        }
      });
  });

  $("#deletePasta").submit(function(event){

    var name = $("#Dname").val(); //takes number of name from form

      event.preventDefault();

      $.ajax({
        url:"/pastaDelete/"+name,
        type:'DELETE',
        success: function(data){
          var resultName = data.name;
          var resultNoodle = data.noodle;
          var resultSauce = data.sauce; 
          $("#responseArea").html("Deleted pasta named "+resultName+" with "+resultNoodle+" noodles and "+resultSauce+" sauce");
        }
      });
  });
});
