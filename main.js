// didnt want to change too much, only the necessary to display in the page,
// but since some changes were made, I kept the looney_tunes.js original file
// and this is the one that the index.html will load instead.

// DOM stuff
const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
button.addEventListener('click', mixedMessages);

// data
const characters = ["Pound", "Michael Jordan", "Bang", "Bugs Bunny", "Bupkus", "Daffy Duck", "Blanko", "Lola Bunny", "Nawt", "Tasmanian Devil"];

// logic
function mixedMessages() {
    console.log(textarea)

    // function to return random number

    function getRanNum(arr) {
        return Math.floor(Math.random() * arr.length);
    }

    // Step 1:
    // Returns a random character
    let characterFirst = characters[getRanNum(characters)]

    // Step 2: method to generate a random second character
    // return random second character
    const returnCharSecond = (first, char) => {
        const toReturn = char.filter(base => base !== characterFirst);
        return toReturn[Math.floor(Math.random() * (char.length - 1))]
    }

    // get second character
    let characterSecond = returnCharSecond(characterFirst, characters);

    // Step 3: add moves
    const opponentMoves = ["fly into the stomach", "hit the head hard", "pull up the pants to the head", "gives an explosive present", "gives a big slap", "tying the shoe", "jump on the head", "grabs", "tickles", "scares"];
    const teamMoves = ["pass the ball", "behind the back dribble", "through the legs dribble", "hesitation dribble", "in-and-out dribble", "spin", "flexible hand"]
    const finishingMoves = ["scores 2 points", "the ball bounces out of the ring", "the ball misses the ring complately", "scores 3 points", "has a good shot, which is saved in the last second"];

    // Step 4: add the actions

    let randomOpponentMove = opponentMoves[getRanNum(opponentMoves)];
    let randomTeamMove = teamMoves[getRanNum(teamMoves)];
    let randomFinishingMove = finishingMoves[getRanNum(finishingMoves)];


    // Step 5: return the message
    // Action Friendly
    let output = `${characterFirst} and ${characterSecond} are in action. ${characterFirst} perform a ${randomTeamMove} move and the ball goes to ${characterSecond}.
`;

    // Action Attack
    output += `${characterFirst} and ${characterSecond} are in action. ${characterFirst} perform a ${randomOpponentMove} move and goes forward.
`;

    // Action Finishing
    output += `${characterFirst} attempt to score and ${randomFinishingMove}.`;

    // function to display the first character image
    // 
    function getImage(character) {
        var images = ['./images/jordan.png', './images/bugs_bunny.png', './images/daffy-duck.jpg', './images/lola_bunny.jpg', './images/tazmanian.png', './images/pound.png', './images/bang.png', './images/bupkus.png', './images/blanko.png', './images/nawt.png'];
        if (character === "Michael Jordan") {
            var image = images[0];
        }
        else if(character === "Bugs Bunny") {
            var image = images[1];
        }
        else if(character === "Daffy Duck") {
            var image = images[2];
        }
        else if(character ==="Lola Bunny") {
            var image = images[3];
        }
        else if(character === "Tasmanian Devil") {
            var image = images[4];
        }
        else if (character === "Pound") {
            var image = images[5];
        }
        else if (character === "Bang") {
            var image = images[6];
        }
        else if (character === "Bupkus") {
            var image = images[7];
        }
        else if (character === "Blanko") {
            var image = images[8];
        }
        else if (character === "Nawt") {
            var image = images[9];
        }
        else {
            "Error, please reload the page!"
        }
        return image;
    }
         
    function displayImage() {
        var htmlImage = document.getElementById("imageChar1");
        htmlImage.src = getImage(characterFirst);
    }

    displayImage();

    textarea.textContent = '';
    textarea.append(output);
}