
import inquirer from 'inquirer';

// step 1 computer generate random number 
// step 2  uses input for guessing number
//step3 compare user input with computer random number 
const randomNummber = Math.floor(Math.random()*6 +1);
// console.log(randomNummber);

const answer = await inquirer.prompt([{
    name: "userGuessNumber",
    type: "number",
    message:"please guess a number between 1-6 "
},])

// console.log(answer);

if(answer.userGuessNumber === randomNummber){
    console.log("congratulation you guess the right number");
    
}else {
    console.log('you guessed wrong number ');
    console.log(`${randomNummber} is the right number`);
    
    
}