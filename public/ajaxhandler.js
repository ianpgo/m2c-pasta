$(function(){

  $("#findPasta").submit(function(event){

    var name = $("#Fname").val(); //takes number of name from form

      //to prevent default GET call
      event.preventDefault();

      $.ajax({
        //creates route for pastaFind
        url:"/pastaFind/"+name,
        type:'GET',
        success: function(data){
          if (data.length == 1) {
              var resultName = data[0].name;
              var resultNoodle = data[0].noodle;
              var resultSauce = data[0].sauce; 
              $("#responseArea").html("Found a pasta named " +resultName+" with "+resultNoodle+" noodles and "+resultSauce+" sauce");
            } else{
              $("#responseArea").html(data);
          }
        }
      });
  });

  $("#createPasta").submit(function(event){

    var name = $("#Cname").val();
    var noodle = $("#Cnoodle").val();
    var sauce = $("#Csauce").val();

        //to prevent default GET call
        event.preventDefault();

      $.ajax({
        //creates route for pastaCreate
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
    var newname = $("#Unewname").val();
    var noodle = $("#Unoodle").val(); 
    var sauce = $("#Usauce").val();

      //to prevent default GET call
      event.preventDefault();

      $.ajax({
        //creates route for pastaPost
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

    var name = $("#Dname").val();

      //to prevent default GET call
      event.preventDefault();

      $.ajax({
        //creates route for pastaDelete
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
