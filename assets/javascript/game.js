// initialize vars and arrays

var words = ["skydive", "snowboard", "skateboard", "longboard", "surf", "raft", "wakeboard", "luge", "bmx", "climbing"];
var word;
var wordArr;
var wordLen;
var remG;
var guesses;
var wins;


// commented list of vars for quick reference in case any are removed from global list
// var words = ["skydive", "snowboard", "skateboard", "longboard", "surf", "raft", "wakeboard", "luge", "bmx", "climbing"];
// var word;
// var wordArr;
// var wordLen;
// var remG;
// var guesses;
// var wins;


// functions

// newGame - attach to a New Game button to start a new game
function newGame() {
    // reset number of remaining guesses
    var remG = 6;

    // choose random word from words array
    var word = words[Math.floor(Math.random() * words.length)];
    console.log("word: " + word);

    // split word into array of individual letters, store in wordArr
    var wordArr = word.split("");

    // create uArr
    var uArr = [];
    for (var i=0; i<wordArr.length; i++) {
        uArr.push("_");
    }
    console.log("uArr: " + uArr);

    // create array for previous guesses
    var guesses = [];

    // store important info from current/prev game
    // 
    // 
    // 
    
    // write to html to display uArr, fresh noose, etc.
    // 
    // 
    // 

}

function winCheck() {
    // replace corresponding underscores in uArr with userGuess
    uArr[wordArr.indexOf(userGuess)] = userGuess;
    
    // check if there are any underscores left in uArr
    // no underscores means the user has won the game
    if (uArr.indexOf("_") == -1) {
        alert("You Won!");
    }

    // if there are still underscores in uArr, the user has not yet won (nothing happens until they press another key)
}

function loseCheck() {

}

function guessCheck() {
    if (wordArr.indexOf(guessCheck) > -1) {
        winCheck();
    } else  {
        remG--;

        // code to add body part to visuals goes here
        // 
        // 
        // 

        loseCheck();
    }
}

function checkRepeat() {
    if (guesses.indexOf(userGuess) > -1) {
        alert("You already guessed " + userGuess + "!");
    } else {
        guesses.push(userGuess);
        guessCheck();
    }
}


document.onkeyup = function(event) {
    var userGuess = event.key;

    // add userGuess to guesses array
    guesses.push(userGuess);

    // check if userGuess is a correct guess
    if (wordArr.indexOf(userGuess) > -1) {
        // if correct, replace it with corresponding _ in uArr
        uArr[wordArr.indexOf(userGuess)] = userGuess;
        console.log("current uArr: " + uArr);
        // check if word is complete (user wins)
        if (uArr.indexOf("_") == -1) {
            // USER WINS - tell them to hit New Game button to start over
            // 
            // 
            // 
        }
    } else {
        // if incorrect, subtract 1 from remG, add body part
        remG--;
        console.log("current remG: " + remG);
        // code to add body part
        // 
        // 
        // 
        if (remG = 0) {
            // USER LOSES - tell them to hit New Game button to start over
            // 
            // 
            // 
        }
    }

}