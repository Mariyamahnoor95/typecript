import inquirer from "inquirer";
// in this program we use inquirer for user input  and ifelse use to check conditions 
// declare balance and pincode 
let myBalance = 10000;
const myPinCode = 1234;
// 
const pininquir = await inquirer.prompt([
    {
        name: "yourPinNumber",
        type: "number",
        message: "Enter your pin Number",
    },
]);
console.log(pininquir.yourPinNumber);
if (pininquir.yourPinNumber === myPinCode) {
    //   console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select options",
            choices: ["withdraw", "check balance", "1000", "2000", "5000"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount ",
            },
        ]);
        if (myBalance >= withdrawAmount.amount) {
            myBalance -= withdrawAmount.amount;
            console.log(`withdraw successfully you remaining balance is ${myBalance} `);
        }
        else {
            console.log("your  amount is greater then your balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "1000") {
        myBalance -= 1000;
        console.log(`withdraw successfully you remaining balance is ${myBalance} `);
    }
    else if (operationAns.operation === "2000") {
        myBalance -= 2000;
        console.log(`withdraw successfully you remaining balance is ${myBalance} `);
    }
    else if (operationAns.operation === "5000") {
        myBalance -= 5000;
        console.log(`withdraw successfully you remaining balance is ${myBalance} `);
    }
}
else {
    console.log("incorrect pincode ");
}
