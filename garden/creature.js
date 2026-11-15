  $("#add-button").click(function (){

    let label = $("#item-label").val().trim();

    if((label=="") || ( label.lenth<20) ){
        $("#message").text("Creature;s name should not be empty or longer than 20 characters");
    }


    else {

        let item = $("<li></li>");

        item.text(label);

        $("#items").append(item);

        $("#item-label").val("");

        $("#item-label").focus();

        $("#message").text("");
        
    }
  })