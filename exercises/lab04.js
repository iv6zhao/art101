let count = 0;

let buttonCreature = {
    name: "needy button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["cat", "dog", "tiger", "zebra", "dolphin", "cow","mouse","snake","horse","parrot"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You have discovered " + count + " animals.</p>";

    message = message + "<p> A " + currentMood + " has appeared.</p>";

    $("#output").html(message);


    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});