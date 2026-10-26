let about="minky and rukki"

let information = {
    place: "the beach",
    food: "bananas & ice cream sundaes!"

}



$("#needy-button").click(function () {
let message =  about + " fell in love here at utopia while studying together at monkey academy ";
$("#answer").html(message);
})

$("#food").click(function () {
    let message = "minky and rukki's favorite foods are" + "<strong>" + "</strong>" + information.food
$(answer).html(message);
})

$("#place").click(function(){
    let message = "minky and rukki's favorite foods are" + "<strong>" + "</strong>" + information.place
$(answer).html(message);
})