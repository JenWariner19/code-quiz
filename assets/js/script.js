var question1 = 
    {
        prompt: "What is the shotcut to start your HTML code?",
        a: "A: ./",
        b: "B: !",
        c: "C: ++",
        d: "D: *",
        answer: "B"
    };

    var question2 = 
    {
        prompt: "Which is not a CSS selector?",
        a: "A: Array",
        b: "B: Universal",
        c: "C: Class",
        d: "D: ID",
        answer: "A"
    };

    var question3 = 
    {
        prompt: "What method allows you to run code when an intercation happens?",
        a: "A: concat",
        b: "B: push",
        c: "C: addEventListener",
        d: "D: splice",
        answer: "C"
    };

    var question4 = 
    {
        prompt: "Functions must be followed by what?",
        a: "A: []",
        b: "B: {}",
        c: "C: ;",
        d: "D: ()",
        answer: "D"
    };

    var question5 = 
    {
        prompt: "Which is not used in JavaScript",
        a: "A: for loops",
        b: "B: if statements",
        c: "C: media-query",
        d: "D: variables",
        answer: "C"
    };

var questionsArr = [question1, question2, question3, question4, question5];

var startBtn = document.querySelector("#start-btn");
var viewHigh = document.querySelector("#view-highscores");
var timeRemaining = document.querySelector("#time");
var quizTitle = document.querySelector("#quiz-title");
var quizInstructions = document.querySelector("#quiz-instructions");
var homePage = document.querySelector(".home-page");
var questionText = document.querySelector("#question");
var question1Text = document.querySelector("#a");
var question2Text = document.querySelector("#b");
var question3Text = document.querySelector("#c");
var question4Text = document.querySelector("#d");
var nextBtn = document.querySelector("#next-btn");
var displayQuestion = document.querySelector(".display-question");

var timeLeft = 60;
var myTimer;
var currentQuestion = questionsArr[0];

function init() {
    displayQuestion.style.visibility = "hidden";
}
 
function renderQuestion () {
    homePage.style.display = "none";
    displayQuestion.style.visibility = "visible";

    questionText.textContent = currentQuestion.prompt;
    question1Text.textContent = currentQuestion.a;
    question2Text.textContent = currentQuestion.b;
    question3Text.textContent = currentQuestion.c;
    question4Text.textContent = currentQuestion.d;
}

function nextQuestion () {
    for (var i=0; i < questionsArr.length; i++); {
    currentQuestion = questionsArr[i];

    questionText.textContent = currentQuestion.prompt;
    question1Text.textContent = currentQuestion.a;
    question2Text.textContent = currentQuestion.b;
    question3Text.textContent = currentQuestion.c;
    question4Text.textContent = currentQuestion.d;
    }
}

nextBtn.addEventListener("click", nextQuestion);


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