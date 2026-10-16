//the clicker button Program

let counter=0;

$("#needy-button").click(function(){
    // what to do when the button is clicked
    counter = counter +3;

    $("#needy-button").html(" pooped" + counter + " times")

});

