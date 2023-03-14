var startBtn = document.querySelector("#start-btn");
var viewHigh = document.querySelector("#view-highscores");
var timeRemaining = document.querySelector("#time");
var quizTitle = document.querySelector("#quiz-title");
var quizInstructions = document.querySelector("#quiz-instructions");

var timeLeft = 60;
var myTimer;

var questions = [
    {
        prompt: "What is the shotcut to start your HTML code?",
        a: "./",
        b: "!",
        c: "++",
        d: "*",
        answer: "b"
    },
    {
        prompt: "Which is not a CSS selector?",
        a: "Array",
        b: "Universal",
        c: "Class",
        d: "ID",
        answer: "a"
    },
    {
        prompt: "What method allows you to run code when an intercation happens?",
        a: "concat",
        b: "push",
        c: "addEventListener",
        d: "splice",
        answer: "c"
    },
    {
        prompt: "Functions must be followed by what?",
        a: "[]",
        b: "{}",
        c: ";",
        d: "()",
        answer: "d"
    },
    {
        prompt: "Which is not used in JavaScript",
        a: "for loops",
        b: "if statements",
        c: "media-query",
        d: "variables",
        answer: "c"
    },
]


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
}
startBtn.addEventListener("click", startQuiz)