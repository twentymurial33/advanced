
var Letter=function(){
   this.name=""
   this.guessed=false
   this.store=function(){
    if(this.guessed){
        return(this.name)
    // if (this.guessed){
       
    // }
    }
   }
 this.checked=function(character){
     if(this.name==character)
     this.guessed=true
 }
}


module.exports= Letter;
var letter=new Letter()
// console.log(letter.store())
letter.name="M"
// console.log(letter.store())
console.log(letter.checked("M"))
console.log(letter.store())