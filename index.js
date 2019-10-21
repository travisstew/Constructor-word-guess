var word = require('./Word');
var inquirer = require('inquirer');

inquirer.prompt([{
  type: 'list',
  message: 'do you want to start game',
  choices:['yes','no'],
  name:"question",

},

]).then(function(result){
  console.log(result.question);
  
})