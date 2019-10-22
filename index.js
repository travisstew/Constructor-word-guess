var Word = require('./Word');
var inquirer = require('inquirer');

var attempts = 5;
var rightAns=0;
var game = new Word('dog');

inquirer.prompt([{
  type: 'list',
  message: 'do you want to start game',
  choices:['yes','no'],
  name:"question",

},

]).then(function(result){
  
  if(result.question === 'yes'){
    console.log('got it');
    game.returnWord();
    startGame();
  }
  
});


function startGame(){
  inquirer.prompt({
    type:'input',
    message: 'Guess a Letter',
    name: 'letter'

  }).then(function(result){

    game.checkLetter(result.letter);

    if(attempt(result.letter) < 0){
      attempts--;
    }else{
      rightAns++;
    }
    
    game.returnWord();
    
   
    console.log(`You have ${attempts} left`);

    if(attempts > 0 && rightAns < game.word.length){
      startGame(); 
    }
    if(rightAns >= game.word.length){
      console.log('You Win!!!!');
    }
    if(attempts === 0){
      console.log('You Lose!!!!');
    }

  });
}

function attempt(ans){
    var answer = game.word;
    var attemptCount = answer.search(ans);
    return attemptCount;
}   
  
