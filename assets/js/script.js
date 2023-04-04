let qIndex = 0;

let time = 40;

let playerScore = 0;

const questions = [
  {
    q: "What is the proper function syntax?",
    answers: ["func(){};", "function{}[];", "!func(){}:", "function(){};"],
    a: "function(){};",
  },
  {
    q: "What does Document.querySelector() do?",
    answers: [
      "changes the document styling.",
      "Shows the key code",
      "Selects a CSS selector",
      "Starts a function",
    ],
    a: "Selects a CSS selector",
  },
  {
    q: "How do you format an if statement?",
    answers: [
      "if then(){maybe}",
      "if(){}then",
      "then if (){}",
      "if we do this then{}",
    ],
    a: "if(){}then",
  },
  {
    q: "How would you stop event bubbling?",
    answers: ["Tell it to stop", ".stopBubble", ".stopPropagation", ".stopNow"],
    a: ".stopPropagation",
  },
];

const highScoreList =JSON.parse(localStorage.getItem("highscores")) || [];

const startBtn = document.getElementById("start-btn");

const startQuizDiv = document.getElementById("start-quiz");

const questionDiv = document.getElementById("question-div");

const questionBox = document.getElementById("question");

const answerOne = document.getElementById("answer-1");

const answerTwo = document.getElementById("answer-2");

const answerThree = document.getElementById("answer-3");

const answerFour = document.getElementById("answer-4");

const rightWrong = document.getElementById("right-wrong");

const timer = document.getElementById("timer");

const mainContent = document.getElementById("main-content");

const initialDiv = document.getElementById('initial-div')

const initialInput = document.getElementById('initial-input')

const initialBtn = document.getElementById('initial-btn')

let intervalId;

startBtn.addEventListener("click", function () {
//   startTimer();
intervalId = setInterval(timerFunction, 1000);
  startGame();
});



function startGame() {
  startQuizDiv.classList.add("hidden");
  questionDiv.classList.remove("hidden");
  //    firstQuestion();

  //First question is put on screen in divs
  questionBox.innerText = questions[qIndex].q;
  answerOne.innerText = questions[qIndex].answers[0];
  answerTwo.innerText = questions[qIndex].answers[1];
  answerThree.innerText = questions[qIndex].answers[2];
  answerFour.innerText = questions[qIndex].answers[3];

  // question verification for right answer clicked
}

questionDiv.addEventListener("click", function (e) {
  console.log(e.target.innerText);

  let correct;

  //if wright Text of the questions are updated to next question and value is sent to display correct or
  //wrong

  if (e.target.innerText == questions[qIndex].a) {
    let correct = true;
    correctOrNot(correct);
    console.log(qIndex);

    //if wrong questions are changed and wrong! is put on screen and 5 seconds are deducted from time
  } else {
    correct = false;
    time -= 10;
    console.log("whoops");
    correctOrNot(correct);
    console.log(qIndex);
  }
  if (qIndex < questions.length - 1) {
    qIndex++;
    startGame();
  } else {
    endGame();
  }
});


//Timer is set to got down by 1 every second and if the last question is answered time stops. or if time hits 0.

function timerFunction() {
  if (time > 0) {
    timer.innerText = time--;
  } else if (time == 0) {
    endGame();
    clearInterval(intervalId)
  }
  timer.innerText = time;

};

//This function sets the Correct or Wrong text under the questions

function correctOrNot(correct) {
  if (correct == true) {
    rightWrong.innerText = "Correct!";
    rightWrong.classList.remove("hidden");
    setTimeout(() => {
      rightWrong.classList.add("hidden");
    }, 1000);
  } else if (correct == false) {
    rightWrong.innerText = "Wrong!";
    rightWrong.classList.remove("hidden");
    setTimeout(() => {
      rightWrong.classList.add("hidden");
    }, 1000);
  }
};

// stops timer and change the screen to an initials input.

function endGame() {
    clearInterval(intervalId);
    questionDiv.classList.add("hidden");
    initialDiv.classList.remove("hidden");
  
  };

//once submit button is entered it is saved to local storage to be sent to the high score page.

initialBtn.addEventListener('click', function(){
    const playerInitial = {
        initial: initialInput.value,
        score: time
    }
    highScoreList.push(playerInitial)
    localStorage.setItem('highscores',JSON.stringify(highScoreList))
    window.location.href = "../highscore.html";
})
