#!/usr/bin/env node


import inquirer from "inquirer";

// Define the questions and answers
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        type: 'list',
        name: 'q2',
        message: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"]
    },
    {
        type: 'list',
        name: 'q3',
        message: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "NaCl", "O2"]
    }
];

// Function to take the quiz
function takeQuiz() {
    console.log("Wlcome to the Quiz System!");
    inquirer.prompt(questions).then(answers => {
        let correctCount = 0;

        // Check answers
        if (answers.q1 === "Paris") {
            correctCount++;
        } else {
            console.log("Wrong answer for question 1.");
        }

        if (answers.q2 === "Harper Lee") {
            correctCount++;
        } else {
            console.log("Wrong answer for question 2.");
        }

        if (answers.q3 === "H2O") {
            correctCount++;
        } else {
            console.log("Wrong answer for question 3.");
        }

        // Display result
        console.log(`You answered ${correctCount} out of ${questions.length} questions correctly.`);
    });
}

// Start the quiz
takeQuiz();




        