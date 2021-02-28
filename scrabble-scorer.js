// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
      
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word to score: ");
   return word
}

let simpleScore = function (word) {
  word = word.toUpperCase();
  let letterPoints = 0;
  for(let i = 0; i < word.length; i++) {

    letterPoints = word.length
  }
  
  return letterPoints;
}

let vowelBonusScore = function (word) {
  word = word.toUpperCase();
  let letterPoints = 0;
  let vowels = {
  3: ['A', 'E', 'I', 'O', 'U']
  
};
  for (let i = 0; i < word.length; i++) {

    for (const pointValue in vowels) {

      if (vowels[pointValue].includes(word[i])) {
        letterPoints += 3;
        
      } else {
        letterPoints += 1;
      }
    }

  }
  
  return letterPoints;
}




let scrabbleScore = function(word) {
  let letterPoints = 0;
  for (letter in newPointStructure) {
    for (i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        letterPoints += newPointStructure[letter];
      }
    }
  }
  return letterPoints;
}

const scoringAlgorithms = [
  {
     name: "Simple Score",
    description: "Each letter is worth 1 point",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts. consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }

];

function scorerPrompt() {
  scoringType = input.question(`Which scoring algorithm would you like to use? \n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `);
  let score = '';
  if (scoringType === '0') {
    score = scoringAlgorithms[0].scoringFunction(word); 
    console.log(`Score for '${word}': ${score}`);
    
  } else if (scoringType === '1') {
    score = scoringAlgorithms[1].scoringFunction(word);
    console.log(`Score for '${word}': ${score}`);

  } else if (scoringType === '2') {
    score = scoringAlgorithms[2].scoringFunction(word);
    console.log(`Score for '${word}': ${score}`);
  
  } 

return score

}

function transform(object) {
  for (item in object) {
    
    for (i = 0; i < item.length; i++) {
      if (item.indexOf('A')) {
        object["a"] = 1;
      }
      if (item.indexOf('B')) {
        object["b"] = 3;
      }
      if (item.indexOf('C')) {
        object["c"] = 3;
      }
      if (item.indexOf('D')) {
        object["d"] = 2;
      }
      if (item.indexOf('E')) {
        object["e"] = 1;
      }
      if (item.indexOf('F')) {
        object["f"] = 4;
      }
      if (item.indexOf('G')) {
        object["g"] = 2;
      }
      if (item.indexOf('H')) {
        object["h"] = 4;
      }
      if (item.indexOf('I')) {
        object["i"] = 1;
      }
      if (item.indexOf('J')) {
        object["j"] = 8;
      }
      if (item.indexOf('K')) {
        object["k"] = 5;
      }
      if (item.indexOf('L')) {
        object["l"] = 1;
      }
      if (item.indexOf('M')) {
        object["m"] = 3;
      }
      if (item.indexOf('N')) {
        object["n"] = 1;
      }
      if (item.indexOf('O')) {
        object["o"] = 1;
      }
      if (item.indexOf('P')) {
        object["p"] = 3;
      }
      if (item.indexOf('Q')) {
        object["q"] = 10;
      }
      if (item.indexOf('R')) {
        object["r"] = 1;
      }
      if (item.indexOf('S')) {
        object["s"] = 1;
      }
      if (item.indexOf('T')) {
        object["t"] = 1;
      }
      if (item.indexOf('U')) {
        object["u"] = 1;
      }
      if (item.indexOf('V')) {
        object["v"] = 4;
      }
      if (item.indexOf('W')) {
        object["w"] = 4;
      }
      if (item.indexOf('X')) {
        object["x"] = 8;
      }
      if (item.indexOf('Y')) {
        object["y"] = 4;
      }
      if (item.indexOf('Z')) {
        object["z"] = 10;
      }
    }
  }
  delete object['1']; delete object['2']; delete object['3']; delete object['4']; delete object['5']; delete object['8']; delete object['10'];


  return object;
  
}

let newPointStructure = transform(oldPointStructure);

console.log(newPointStructure);
function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

