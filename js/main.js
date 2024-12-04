  /*----- constants -----*/
const myQuestions =[
    {
        question: "Which WWE Superstar's finishing move is the Stone Cold Stunner?",
        answers: {
            A: "Bret Hart",
            B: "Shawn Michaels",
            C: "Stone Cold Steve Austin", 
            D: "The Rock"
        },
        correctAnswer: "C"
    },
    {
        question: "Which WWE Hall of Famer is known for his catchphrase Woo!?" , 
        answers: {
            A: "Shawn Michaels",
            B: "Ric Flair",
            C: "Mick Foley", 
            D: "Bret Hart"

        },
        correctAnswer: "B"
    },
    {
         question: "What is The Rock's real name?",
         answers:{
            A:"Dwayne Johnson", 
            B:"Chris Jericho",
            C:"Randy Orton", 
            D:"John Cena"

         },
         correctAnswer: "A"
    },
    {
          question: "Which wrestler is known for his signature move, the RKO?" ,
          answers:{
            A:"Chris Jericho",
            B: "Kurt Angle",
            C: "Brock Lesnar", 
            D:"Randy Orton"

         },
         correctAnswer: "D"
    },
    {
           question: "Which WWE Superstar has the nickname The Rated-R Superstar?",
           answers:{
            A:"Edge", 
            B:"Randy Orton",
            C:"John Cena",
            D:"Seth Rollins"

         },
         correctAnswer: "A"
    },

    { 
            question: "Which wrestler famously defeated The Undertaker at WrestleMania 30 to end his undefeated streak?",
            answers:{
               A:"Shawn Michaels", 
               B:"Kane", 
               C:"Brock Lesnar", 
               D:"Roman Reigns"

         },
         correctAnswer: "C"
    },

    {
            question:"Which WWE Superstar was once known as The Master of the 619?", 
            answers:{
                A:"Rey Mysterio", 
                B:"Eddie Guerrero",
                C:"CM Punk", 
                D:"Sin Cara"

         },
         correctAnswer: "A"
    },
    {
            question: "Who is the first-ever WWE Superstar to win a title at the WrestleMania event by cashing in their Money in the Bank contract?" ,
            answers: {
                A:"Edge",
                B:"Seth Rollins",
                C:"CM Punk",
                D:"John Cena"

         },
         correctAnswer: "B"
    },
    {
            question: "Which WWE Superstar returned to win the 2023 Women's Royal Rumble match?",
            answers:{
                A:"Becky Lynch",
                B:"Rhea Ripley",
                C:"Charlotte Flair",
                D:"Asuka"

        },
        correctAnswer: "B"
    },
    {
            question: "Who won the first-ever Women's Elimination Chamber match in 2022?",
            answers: {
                A:"Bianca Belair", 
                B:"Rhea Ripley",
                C:"Alexa Bliss", 
                D:"Liv Morgan"

            },
            correctAnswer: "A"
    }
    ];


const winningScore = 7


  /*----- state variables -----*/
  let turn = 0;
  let selectedAnswer 
  let results
  let userScore = 0
  let timeRemaining 
  let timer
  
  /*----- cached elements  -----*/
const questionContainerElement = document.getElementById('question-container')
const answerButtonsElements =[...document.querySelectorAll(".answer-buttons")]
const startButtonElement= document.getElementById('startButton')
const answerFormElement= document.getElementById('answerForm')
const nextQuestionButtonElement = document.getElementById("nextQuestionButton")
const resultsContainerElement= document.getElementById('results')
const labelA = document.querySelector('label[for="A1"]')
const labelB = document.querySelector('label[for="A2"]')
const labelC = document.querySelector('label[for="A3"]')
const labelD = document.querySelector('label[for="A4"]')

  /*----- event listeners -----*/
startButtonElement.addEventListener('click', function (){
init();
});
nextQuestionButtonElement.addEventListener('click', nextQuestion)
answerFormElement.addEventListener("submit", event => selectAnswer(event))

/*----- functions -----*/
function init (){
    gameTimer(10);
    questionContainerElement.innerText = myQuestions[turn].question
    labelA.innerText = myQuestions[turn].answers.A
    labelB.innerText = myQuestions[turn].answers.B
    labelC.innerText = myQuestions[turn].answers.C
    labelD.innerText = myQuestions[turn].answers.D
}

function nextQuestion(){
turn++ 
clearInterval(timer)
timerDisplay.innerText = " "
resultsContainerElement.innerText = ''
selectedAnswer = document.querySelector('input[name="answer"]:checked') 
selectAnswer.checked = false;
if(turn >= 10){
    resultsContainerElement.innerText = userScore
}
else{
init()
  }
}
  function showQuestion(question){
    questionElement.innerText = question.question
  }
  
  function selectAnswer(event){
    event.preventDefault()
selectedAnswer = document.querySelector('input[name="answer"]:checked')
results= checkAnswer()
showResults()
  }
  function checkAnswer(){
if(selectedAnswer.value === myQuestions[turn].correctAnswer){
   userScore++
    return true;
}
return false;
  }
  function showResults(){
    if(results){
     resultsContainerElement.innerText = "You are correct!"   
    }
    else{
        resultsContainerElement.innerText = "Wrong Answer!"
    }
  }
  function gameTimer(timeRemaining){
    const timerDisplay = document.getElementById('timerDisplay');

    timer = setInterval(() => {
        if (timeRemaining < 0) {
            clearInterval(timer);
            timerDisplay.innerText = "Time is up!";
            nextQuestion();
        } else {
            timerDisplay.innerText = timeRemaining;
            timeRemaining--;
        }
    }, 1000);
}   
