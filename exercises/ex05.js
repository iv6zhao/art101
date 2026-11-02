//the clicker button Program
function paintPage(colors){
    $("body").css( "background-color", colors);
}
paintPage("pink");

let counter=0;
let colorsCount= 0

let colors=["green","pink","blue","purple", "brown"]

let buttonText="i have pooped";

$("#needy-button").click(function(){
    // what to do when the button is clicked
    counter = counter +1;

    console.log(counter);
    console.log(colors[colorsCount-1])

    $("#needy-button").html( buttonText)

    buttonText= "i have pooped " + counter + " times and it was " + colors[counter-1];
    
    paintPage(colors[colorsCount])
   
//$("body").css("background-color", colors[colorsCount]);


});




$("#blue").click(function(){

    console.log("blue was clicked");
    paintPage("blue");

})

$("#purple").click(function(){

    console.log("purple was clicked");
    paintPage("purple");

})

$("#pink").click(function(){

    console.log("pink was clicked");
    paintPage("pink");

})
