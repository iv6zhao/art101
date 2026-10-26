
let count = 0;

let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["Minki and Rukki are lovers","They love to go to the beach and sunbathe", "one of their favorite things to do is wear matching couple outfits"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You have unlocked " + count + " fun facts!.</p>";


    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});