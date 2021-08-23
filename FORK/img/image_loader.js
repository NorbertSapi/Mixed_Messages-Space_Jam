
// this is a file to connect img to the event.

function createDoll(userChoice) {
    var output = document.getElementById("display_here");
    output.innerHTML = "";

    var links = [
        "http://www.dreamomania.info/dreamdictionary/wp-content/uploads/2013/02/V.jpg",
        "http://i452.photobucket.com/albums/qq248/lostvegasvip/Burning-letter-P-psd26647.png",
        "http://www.arro-signs.co.uk/red-letter-s.jpg",
        "http://colleenmorrow.com/wp-content/uploads/2011/09/the-letter-m.png"
    ];

    var choices = ["Vintage", "Plaid", "Skater", "Maxi"];
    var sentence = "<p>You picked a " + choices[userChoice] + " doll.</p>"
    var img = '<img src="' + links[userChoice] + '">';

    output.innerHTML = sentence + img;
}

