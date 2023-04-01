let QIndex = 0;

let time = 70;


const questions = [
{
    q:"What is the proper function syntax?",
    answers:["func(){};","function{}[];","!func(){}:","function(){};"],
    a:"function(){};"

},
{

    q:"What does Document.querySelector() do?",
    answers:["changes the document styling.","Shows the key code", "Selects a CSS selector","Starts a function"],
    a:"Selects a CSS selector"
},
{
    q:"How do you format an if statement?",
    answers:["if then(){maybe}","if(){}then","then if (){}","if we do this then{}"],
    a:"if(){}then"

},
{
    q:"How would you stop event bubbling?",
    answers:["Tell it to stop",".stopBubble",".stopPropagation",".stopNow"],
    a:".stopPropagation"

}
];

const startBtn = document.getElementById('start-btn');

const startQuizDiv = document.getElementById('start-quiz')

const questionDiv = document.getElementById('question-div')

const questionBox = document.getElementById('question')

const answerOne = document.getElementById('answer-1')

const answerTwo = document.getElementById('answer-2')

const answerThree = document.getElementById('answer-3')

const answerFour = document.getElementById('answer-4')

const rightWrong = document.getElementById('right-wrong')

const timer = document.getElementById('timer')






startBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', timerFunction);



function startGame(){
   timer.innerText = time;
   
   startQuizDiv.classList.add('hidden');
   questionDiv.classList.remove('hidden');









};

function timerFunction(){
console.log('timer starts too');
};
