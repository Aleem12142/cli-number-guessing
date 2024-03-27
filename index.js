#! /usr/bin/env node
import inquire from "inquirer";
// 1) computer will generate a random number -Done
// 2) user input for guessing number -Done
// 3) Compaire user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquire.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
// console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("You guessed the wrong number");
}
