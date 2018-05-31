var letter = require('./letter.js');

function Word (newWord) {
    this.wordArray = newWord.split('').map(x => new Letter(x)),
    this.secretWord = newWord,

    this.displayWord = function() {
        var displayWord = [] 
        this.wordArray.forEach(function(element) {
            displayWord.push(element.show());
        })
        console.log(`${displayWord.join(" ")}\n`);

    },
    this.checkUserGuess = function (userGuess){
        var wordGuessed = false;
        this.wordArray.forEach(function(element){
            if (userGuess === element.char) {
               
                element.letterGuessed = true
                
                wordGuessed = true
            }
        })
        if (wordGuessed === true) {
          
            this.displayWord();
            return true
        }   
        if (wordGuessed === false) {
            
            this.displayWord();
            return false
        }
    }
}

module.exports = Word;