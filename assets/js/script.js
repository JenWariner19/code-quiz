//variable for all questions, choices, and answers
var questionsArr = [
    {
        question: "What is the shotcut to start your HTML code?",
        choices: ["A: ./", "B: !","C: ++", "D: *"],
        answer: "B: !",
    },
    {
        question: "Which is not a CSS selector?",
        choices: ["A: Array", "B: Universal", "C: Class", "D: ID"],
        answer: "A: Array",
    },
    {
        question: "What method allows you to run code when an intercation happens?",
        choices: ["A: concat", "B: push", "C: addEventListener", "D: splice"],
        answer: "C: addEventListener",
    },
    {
        question: "Functions must be followed by what?",
        choices: ["A: []", "B: {}", "C: ;", "D: ()"],
        answer: "D: ()",
    },
    {
        question: "Which is not used in JavaScript",
        choices: ["A: for loops", "B: if statements", "C: media-query", "D: variables"],
        answer: "C: media-query",
    },];

//Variables from DOM
var startBtn = document.getElementById("start-btn");
var timeRemaining = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit-btn");
var intialsEL = document.getElementById("intials");
var feedbackEl = document.getElementById("feedback");
var homePageEl = document.getElementsByClassName("home-page");
var endQuiz = document.getElementById("end-quiz");


var timeLeft = 60;
var myTimer;
var currentQuestion = 0;

function init() {
  questionsEl.style.visibility = "hidden";
  endQuiz.style.visibility = "hidden";
  feedbackEl.style.visibility = "hidden";

}
 
function renderQuestion() {
var currentQuestion = questionsArr[currentQuestionIndex];
var QuestionText = document.getElementById("question-text");
QuestionText.textContent = currentQuestion;

}



function startTimer() {
    myTimer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(myTimer);
            return;
        };
        timeLeft--;
        timeRemaining.textContent = timeLeft;
    }, 1000);
}

function startQuiz() {
    timeLeft= 60;
    startBtn.disabled = true;
    isStarted = true;

    startTimer();
    renderQuestion();
}
startBtn.addEventListener("click", startQuiz)

init();