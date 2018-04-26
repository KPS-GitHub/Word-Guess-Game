// initialize vars and arrays

var words = ["skydive",
             "snowboard", 
             "skateboard",
             "longboard", 
             "surf", 
             "raft", 
             "wakeboard", 
             "luge", 
             "bmx", 
             "climbing"
            ];
var word;
var prevWord;
var wordArr = [];
var uArr = [];
var wordLen;
var remG = 6;
var userGuess;
var guesses = [];
var wins = 0;


// commented list of vars for quick reference in case any are removed from global list
// var words = ["skydive", "snowboard", "skateboard", "longboard", "surf", "raft", "wakeboard", "luge", "bmx", "climbing"];
// var word;
// var wordArr;
// var wordLen;
// var remG;
// var guesses;
// var wins;


// FUNCTIONS

// newGame - attach to a New Game button to start a new game
function newGame() {

    // reset values
    guesses = [];
    remG = 6;

    // choose random word from words array
    word = words[Math.floor(Math.random() * words.length)];
    console.log("word: " + word);

    // split word into array of individual letters, store in wordArr
    wordArr = word.split("");
    console.log(wordArr);

    // reset and fill out uArr
    uArr = [];
    for (var i=0; i<wordArr.length; i++) {
        uArr.push("_");
    }
    console.log("uArr: " + uArr);
    
    // write to html to display wins, uArr, fresh noose, etc.
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#uarr").innerHTML = "Word: " + uArr.join(" ");
    document.querySelector("#guesses").innerHTML = "Guessed Letters: " + guesses;
    document.querySelector("#remg").innerHTML = "Guesses Remaining: " + remG;
    // noose html - make once game works

}

function winCheck() {
    console.log("made it to winCheck function");
    // check if there are any underscores left in uArr
    // no underscores means the user has won the game
    if (uArr.indexOf("_") == -1) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("You Won! The word was: " + word);
        newGame();
        console.log("made it to win condition and reset - did it work?");
    }
    // if there are still underscores in uArr, the user has not yet won (nothing happens until they press another key)
}

function loseCheck() {
    console.log("made it to loseCheck function");
    if (remG == 0) {
        alert("You lost :( \nThe word was: " + word);
        newGame();
        console.log("made it to lose condition and reset - did it work?");
    }
    // if remG is not yet equal to 0, the user has not yet lost (nothing happens until they press another key)
}

function guessCheck() {
    console.log("made it to guessCheck function");
    console.log("guessCheck wordArr: " + wordArr);
    console.log("guessCheck userGuess: " + userGuess);
    // if userGuess is correct
    if (wordArr.indexOf(userGuess) > -1) {
        // replace corresponding underscores in uArr with userGuess
        for (var i=0; i<wordArr.length; i++) {
            if (userGuess == wordArr[i]) {
                uArr[i] = userGuess;
            }
        }
        document.querySelector("#uarr").innerHTML = "Word: " + uArr.join(" ");
        console.log("progress: " + uArr);
        // check if win conditions are met
        winCheck();
    } else  {
        remG--;
        document.querySelector("#remg").innerHTML = "Guesses Remaining: " + remG;
        // code to add body part to visuals goes here
        // 
        // 
        // 

        loseCheck();
    }
}

function checkRepeat() {
    console.log("made it to checkRepeat function");
    console.log("userGuess in checkRepeat(): " + userGuess);
    console.log("guesses list in checkRepeat(): " + guesses);
    if (guesses.indexOf(userGuess) > -1) {
        alert("You already guessed " + userGuess + "!");
    } else {
        guesses.push(userGuess);
        document.querySelector("#guesses").innerHTML = "Guessed Letters: " + guesses;

        guessCheck();
    }
}


// MAIN PROCESS 

newGame();
document.onkeyup = function(event) {
    // store the key pressed in userGuess var
    userGuess = event.key.toLowerCase();
    console.log("userGuess: " + userGuess);

    // make sure the userGuess is not a repeat of a previous guess
    checkRepeat();
    }

