let gameState = {
incorrectGuesses : [],
remainingGuesses : 10
};
function setWord() {
	var x = document.getElementById("input").elements;
	var item = x.item("guess");
	var word = item.value;
	alert(word);
}
function validate (guess) {
//validate the input from the form (letter)
}
function check (guess) {
//check if the guess is correct
}
function updateWordTiles (index) {
//update the tiles on the HTML
}
function checkEndOfGame(){
//check if the player has guessed the secret word or if the game is over (no more
//remaining guesses
}
function reset () {
//reset the game (set new word to be guessed, clean word tiles, incorrect
//guesses and remaining guesses
}