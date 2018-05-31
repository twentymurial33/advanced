
var Letter =function(character)  {
    this.character = character
    this.guessed = false
    this.store = function() {
        if (this.guessed) {
            return (this.character)
        }
    }
    this.check = function (userGuess) {
        if ( userGuess === this.character) {
            this.guessed = true;
    } 
}

}
module.exports = Letter;

var letter=new Letter()
letter.name="M"