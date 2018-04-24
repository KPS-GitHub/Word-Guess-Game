// initialize vars and arrays

var words = ["skydive", "snowboard", "skateboard", "longboard", "surf", "raft", "wakeboard", "luge", "bmx", "climbing"];
var word;
var wordArr = word.split("");
var wordLen = wordArr.length;
var wrong = [];
var wins = 0;
var remG = 7;

// store list of vars for quick reference
// var words = ["skydive", "snowboard", "skateboard", "longboard", "surf", "raft", "wakeboard", "luge", "bmx", "climbing"];
// var word;
// var wordArr = word.split("");
// var wordLen = wordArr.length;
// var wrong = [];
// var wins = 0;
// var remG = 7;


// functions

// attach to a New Game button to start a new game
function newGame() {

}


document.onkeyup = function(event) {
    var userGuess = event.key;
    var word = words[Math.floor(Math.random() * words.length)];
}