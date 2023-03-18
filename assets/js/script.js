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
        question: "What method allows you to run code when an interaction happens?",
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

//Variables from HTML
var startBtn = document.getElementById("start-btn");
var timeRemaining = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit-btn");
var intialsEL = document.getElementById("intials");
var feedbackEl = document.getElementById("feedback");
var homePageEl = document.getElementById("home-page");
var endQuizText = document.getElementById("end-quiz");
var questionText = document.getElementById("question-text");
var scoreView = document.getElementById("score");

//Remaining variables
var timeLeft = 60;
var score = 0;
var scoresArr = [];
var myTimer;
var currentQuestionIndex = 0;


function init() {
  questionsEl.style.visibility = "hidden";
  endQuizText.style.visibility = "hidden";
  feedbackEl.style.visibility = "hidden";
}

function nextQuestion(event) {
    var choiceBtn = event.target;
    var userChoice = choiceBtn.textContent;
    checkAnswer(userChoice);
    questionsEl.innerHTML = "";
    currentQuestionIndex++;
    if(currentQuestionIndex > 4) {
        endQuiz();
    } else {
        renderQuestion();
    };
};

function checkAnswer(guess) {
    var checkAnswer = questionsArr[currentQuestionIndex];
    var answer = checkAnswer.answer
    feedbackEl.setAttribute("style", "font-size: 30px; font-weight:bold; margin-left: 30%; margin-bottom: 10px;");
    if(answer !== guess) {
        timeLeft = (timeLeft -10);
        feedbackEl.textContent = "Wrong Answer";
   } else {
    feedbackEl.textContent = "Correct!";
   }
};

function endQuiz() {
    clearInterval(myTimer);
    questionsEl.style.visibility = "hidden";
    var outcome = document.createElement("h1");
    outcome.setAttribute("style", "font-size: 30px; font-weight:bold; margin-top: 10%; margin-left: 30%; margin-bottom: 10px;");
    outcome.innerHTML = "You got a score of: " + timeLeft + "!";
    endQuizText.append(outcome);
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Initials...");
    input.setAttribute("style", "margin-left: 30%;");
    endQuizText.append(input);
    var submit = document.createElement("button");
    submit.innerHTML = "Submit";
    endQuizText.append(submit);
    submit.addEventListener("click", function() {
        var initials = input.value;
        endQuizText.style.visibility = "visible";
        localStorage.setItem("finalScore", JSON.stringify([initials, timeLeft]));
        input.setAttribute("placeholder", " ");
    });
}

function renderQuestion() { 
questionsEl.innerHTML = "";
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

questionText.setAttribute("style", "font-size: 30px; font-weight:bold; margin-left: 30%; margin-bottom: 10px;");
choice1.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 26px; background-color: navy; color: white; cursor: grab;");
choice2.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 26px; background-color: navy; color: white; cursor: grab;");
choice3.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 26px; background-color: navy; color: white; cursor: grab;");
choice4.setAttribute("style", "display: block; width: 15%; margin-left: 30%; margin-bottom: 5px; font-size: 26px; background-color: navy; color: white; cursor: grab;");

questionsEl.appendChild(questionText);
questionsEl.appendChild(choice1);
questionsEl.appendChild(choice2);
questionsEl.appendChild(choice3);
questionsEl.appendChild(choice4);

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

        if (timeLeft === 0) {
            clearInterval(myTimer);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    timeLeft= 60;
    startBtn.disabled = true;
    isStarted = true;

    homePageEl.style.display = "none";
    questionsEl.style.visibility = "visible";
    feedbackEl.style.visibility = "visible";
    endQuizText.style.visibility = "visible";

    startTimer();
    renderQuestion();
}

startBtn.addEventListener("click", startQuiz)

init();