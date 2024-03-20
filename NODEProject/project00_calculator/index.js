#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
let result;
switch (answer.operator) {
    case "Addition":
        result = answer.firstNumber + answer.SecondNumber;
        console.log("the answer for addition " + result);
        break;
    case "Subtraction":
        result = answer.firstNumber - answer.SecondNumber;
        console.log("the answer for Subtraction " + result);
        break;
    case "Multiplication":
        result = answer.firstNumber * answer.SecondNumber;
        console.log("the answer for addition " + result);
        break;
    case "Division":
        result = answer.firstNumber / answer.SecondNumber;
        console.log("the answer for addition " + result);
        break;
}
// if (answer.operator === "Addition") {
//   result = answer.firstNumber + answer.SecondNumber;
//   console.log("the answer for addition " + result);
// } else if (answer.operator === "Subtraction") {
//   result = answer.firstNumber - answer.SecondNumber;
//   console.log("the answer for Subtraction " + result);
// } else if (answer.operator === "Multiplication") {
//   result = answer.firstNumber * answer.SecondNumber;
//   console.log("the answer for Multiplication " + result);
// } else if (answer.operator === "Division") {
//   result = answer.firstNumber / answer.SecondNumber;
//   console.log("the answer for Division " + result);
// }
