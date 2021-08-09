
// Step 1: method to generate a random first character
// Returns a random character
const returnRandChar = () => {
    const characters = ["Pound", "Michael Jorden", "Bang", "Bugs Bunny", "Bupkus", "Daffy Duck", "Blanko", "Lola Bunny", "Nawt", "Tasmanian Devil", "basket"];
    const toReturn = characters.filter(base => base !== "basket");
    return toReturn[Math.floor(Math.random() * (characters.length-1))]
  }

const characterFirst = returnRandChar();
console.log("first: " + characterFirst);


// Step 2: method to generate a random second character
// return random second character
const returnCharSecond = (first) => {
    const characters = ["Pound", "Michael Jorden", "Bang", "Bugs Bunny", "Bupkus", "Daffy Duck", "Blanko", "Lola Bunny", "Nawt", "Tasmanian Devil", "basket"];
    const toReturn = characters.filter(base => base !== characterFirst);
    return toReturn[Math.floor(Math.random() * (characters.length-1))]
    }

let characterSecond = returnCharSecond(characterFirst)
console.log("second: " + characterSecond);

