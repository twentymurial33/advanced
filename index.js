var inquirer = require("inquirer");

var words = ["giraffe", "hyena", "hippo"];
var randomWord = words[Math.floor(Math.random() * words.length)]

//console.log(randomWord)
//console.log(randomWord.indexOf('a') > -1)
inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter in the word",
			name: "letter"
		}
	]).then(function(answers){
		console.log("Random word is " + randomWord);
		if(randomWord.indexOf(answers.letter) > -1){
			console.log("Letter " + answers.letter + " is in the word")
		} else {
			console.log("Letter " + answers.letter + " is not in the word")
		}
});