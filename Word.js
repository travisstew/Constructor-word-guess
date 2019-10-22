var letter =require('./Letter');


function Word(word){
      this.word = word;
      this.letters = [];

      for(var i=0; i < word.length; i++ ){
        this.letters.push(new letter(word[i]));
      }
      
      this.returnWord = function(){
          var newArray = [];
          for(var i = 0; i < this.letters.length; i++){
              newArray.push(this.letters[i].returnChar());
          }
          console.log(newArray.join(" "));
      }

      this.checkLetter = function(char){
        this.letters.forEach(function(e){
          e.guess(char);
      });
    }
  }

 module.exports = Word;


// var dog = new Word('dog will be dogs');
// // dog.checkLetter('o');
// // dog.returnWord();
// console.log(dog.word.search);






