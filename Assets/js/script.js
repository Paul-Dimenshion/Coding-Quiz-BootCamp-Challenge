// // Create div
// const div = document.createElement('div');

// // Add for div class wrapper
// div.classList.add('wrapper');

// // Put it inside body tag
// const body = document.body;
// body.appendChild('div');

// // Create H1 header 
// const header = document.createElement('h1')
// header.textContent = 'Coding Qiuz Challenge'

// // Add H1 before div with wrapper class
// div.insertAdjacentElement('beforebegin', header)

// // Сreate a list <ul></ul>
// // And add 4 elements with text
// const ul = `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//     </ul>
//     `;

// // Place a list of the internal label with wrapper class
// div.innerHTML = ul;

// Create variebles for questions
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["string", "booleans", "alerts", "numbers"],
        correct: 2,
    },

    {
        question: "The condition in an if/else statement is enclosed within _________:",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: 2, 
    },

    {
        question: "Arrays in JavaScript can be used to store _________:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: 3, 
    },

    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: 2, 
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

const question = questions[questionIndex];

    // question
    const pageTemplate = ''
    console.log(questions[questionIndex]['question']);

    // answer options
    for (item of questions[questionIndex]['answers']){
        console.log(item);
    }
}

function startQuiz(){
    headerContainer.innerHTML = ""
    renderQuestion()
}

startBtn.addEventListener("click", startQuiz)

const userScores = { }

function nextQuestion(e){
    const userAnswer = e.target.innerText
    const question = questions[questionIndex];
    const answerCorrect = question.correct
    console.log(e)
}

function renderQuestion(){
    const question = questions[questionIndex];
    const para = document.createElement("p");
    para.innerText = question.question;
    headerContainer.appendChild(para);
    const ul = document.createElement('ul');
    headerContainer.appendChild(ul);
    for (answer of question.answers){
        console.log(answer);
        const li = document.createElement("li");
        li.innerText = answer;
        ul.appendChild(li);
        li.addEventListener("click", nextQuestion)
    }
}



