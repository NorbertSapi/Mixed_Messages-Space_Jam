// didnt want to change too much, only the necessary to display in the page,
// but since some changes were made, I kept the looney_tunes.js original file
// and this is the one that the index.html will load instead.

// DOM stuff
const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
button.addEventListener('click', mixedMessages);

// data
const looneys = ["Michael Jorden", "Bugs Bunny", "Daffy Duck", "Lola Bunny", "Tasmanian Devil"];
const monsters = ["Pound", "Michael Jorden", "Bang", "Bugs Bunny", "Bupkus", "Daffy Duck", "Blanko", "Lola Bunny", "Nawt", "Tasmanian Devil"]
const characters = ["Pound", "Michael Jorden", "Bang", "Bugs Bunny", "Bupkus", "Daffy Duck", "Blanko", "Lola Bunny", "Nawt", "Tasmanian Devil"];

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
    // Left these 3 above split in case we want to add any other functionality that uses them by steps or similar.

    textarea.textContent = '';
    textarea.append(output);
}