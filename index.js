var word = require('./word.js');
var inquirer = require('inquirer');

var wordList = ["Murial", "Thirthy", "Filthy","Arlington"];
var randomWord =wordList[Math.floor(Math.random() * wordList.length)]


function playGame() {
	inquirer.prompt(
			{
					type: "input",
					name: "userGuess",
					message: "Guess a Letter: "
			}
	).then(function(answers) {
		console.log("Random word is " + randomWord);
		if(randomWord.indexOf(answers.letter) > -1){
			console.log("CORRECT!")
		} else {
			console.log("INCORRECT")
		}
		inquirer.prompt(
			{
					type: "input",
					name: "userGuess",
					message: "Guess a Letter: "
			}
	).then(function(answers) {
		console.log("Random word is " + randomWord);
		if(randomWord.indexOf(answers.letter) > -1){
			console.log("CORRECT!")
		} else {
			console.log("INCORRECT")
		}
		
	})	
	})
	function isGuessed(){
		if (lettersGuessed.includes(userGuess)) {
			console.log('already guessed, try again')

	} else {
		lettersGuessed.push(userGuess);
	
	}
}
	
}

playGame();