//the clicker button Program

let counter=0;

let colors=["green","pink","blue","purple", "brown"]

let buttonText="i have pooped";

$("#needy-button").click(function(){
    // what to do when the button is clicked
    counter = counter +1;

    console.log(counter);
    console.log(colors[counter-1])

    $("#needy-button").html( buttonText)

    buttonText= "i have pooped " + counter + " times and it was " + colors[counter-1];

    $("body").css("background-color", colors[counter-1]);


});

