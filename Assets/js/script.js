const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["string", "booleans", "alerts", "numbers"],
        correct: 3,
    },

    {
        question: "The condition in an if/else statement is enclosed within _________:",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: 3, 
    },

    {
        question: "Arrays in JavaScript can be used to store _________:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: 4, 
    },

    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: 3, 
    }
]

// find elements
const headerContainer = document.querySelector('#quiz-header');
const questionsContainer = document.querySelector('#question');
const answersContainer = document.querySelector('#answers');
const resultContainer = document.querySelector('#result');
const startBtn = document.querySelector('#start-quiz');
const checkBtn = document.querySelector('#check-answer');
const playAgainBtn = document.querySelector('#play-again');

// variables of quiz
let score = 0; // quantatie of correct answers
let questionIndex = 0; // current question

// page cleanup function
function clearPage(){
    questionsContainer.innerHTML = '';
    answersContainer.innerHTML = '';
    checkBtn.innerHTML = '';
    playAgainBtn.innerHTML = '';
}

clearPage()

// question display function
function showQuestion(){
    console.log('showQuestion');

    // question
    const pageTemplate = ''
    console.log(questions[questionIndex]['question']);

    // answer options
    for (item of questions[questionIndex]['answers']){
        console.log(item);
    }
}