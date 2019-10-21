function Letter(char){
  this.char = char;
  this.guessed = false;
  
  this.returnChar = function () {
        if(this.guessed){
          return this.char;
        }else{
          return ('_');
        }

    }

    this.guess = function (char){ 
        if(char === this.char){
            this.guessed = true;
        }
     }

}



module.exports = Letter;