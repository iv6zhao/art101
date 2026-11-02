//a says
let messagesA=["yahoo!", "welcome to our site!","lets change the color of the background."]
let counterA= 0;

//b says
let messagesB=["heyyy!","lets have some fun"]
let counterB= 0;


//when A is clicked
$("#character-a").click(function () {

    if (counterA == 2) {
        $("#answers").css("display","flex");
         $("#chat").append("<p>mimi :"+ messagesA[counterA]+"</p>");
        counterA=counterA+1;
        counterB=1000;
    }

    else if (counterA == counterB) {

        $("#chat").append("<p>mimi :"+ messagesA[counterA]+"</p>");

        counterA=counterA+1;
    }

})

//when B is clicked
$("#character-b").click(function (){

    if(counterB < counterA) {
    
        $("#chat").append("<p>gogo :"+ messagesB[counterB]+"</p>");

        counterB=counterB +1;
    }
})



// make the color buttons work

$("#answer-blue").click(function () {

    $("body").css( "background-color","blue" );

});

$("#answer-purple").click(function () {

    $("body").css( "background-color", "purple" );

});
