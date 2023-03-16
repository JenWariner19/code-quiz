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
var homePageEl = document.getElementById("home-page");
var endQuiz = document.getElementById("end-quiz");


var timeLeft = 60;
var myTimer;
var currentQuestionIndex = 0;

function init() {
  questionsEl.style.visibility = "hidden";
  endQuiz.style.visibility = "hidden";
  feedbackEl.style.visibility = "hidden";

}

function nextQuestion() {
    questionsEl.innerHTML = "";
    currentQuestionIndex++;
    renderQuestion()
};

 
function renderQuestion() { 
var currentQuestion = questionsArr[currentQuestionIndex];

var questionText = document.createElement("h2");
choicesEl = document.createElement("ol");
var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");

questionText.textContent = currentQuestion.question;
choice1.textContent = currentQuestion.choices[0];
choice2.textContent = currentQuestion.choices[1];
choice3.textContent = currentQuestion.choices[2];
choice4.textContent = currentQuestion.choices[3];

questionText.setAttribute("style", "font-size: 24px; margin-left: 30%; margin-bottom: 5px;");
choice1.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 20px; background-color: navy; color: white; cursor: grab;");
choice2.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 20px; background-color: navy; color: white; cursor: grab;");
choice3.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 20px; background-color: navy; color: white; cursor: grab;");
choice4.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 20px; background-color: navy; color: white; cursor: grab;");

document.body.appendChild(questionText);
document.body.appendChild(choice1);
document.body.appendChild(choice2);
document.body.appendChild(choice3);
document.body.appendChild(choice4);

choice1.addEventListener("click", nextQuestion);
choice2.addEventListener("click", nextQuestion);
choice3.addEventListener("click", nextQuestion);
choice4.addEventListener("click", nextQuestion);

};



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

    homePageEl.style.visibility = "hidden";

    startTimer();
    renderQuestion();
}

startBtn.addEventListener("click", startQuiz)

init();