// Create an array of questions, choices, and answers
let questions = [
    {
        title: "What does JS stand for?",
        choices: ["JavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
        answer: "JavaScript"
    },
    {
        title: "What is a function called when it is attached on an object?",
        choices: ["Method", "Function", "Callback", "Variable"],
        answer: "Method"
    },
    {
        title: "How do you add one new element at the end of an array?",
        choices: ["Add", "Shift", "Push", "Remove"],
        answer: "Push"
    },
    {
        title: "How do you convert a string to all uppercase letters?",
        choices: ["toCaps", "toUpperCase", "goUpper", "changeCase"],
        answer: "toUpperCase"
    },
    {
        title: "Which one of the following is NOT a JavaScript data type?",
        choices: ["Boolean", "String", "Object", "Language"],
        answer: "Language"
    }
  ];

const mainContainer = document.getElementById('container');
const startButton = document.getElementById('start-btn');
const timer = document.getElementById('countdown');
const timerContainer = document.getElementById('timer-container')
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const lineElement = document.getElementById('hr-line');
const answerArea = document.getElementById('answer');
startButton.addEventListener("click", startQuiz);
let sec = (questions.length * 15);
let randomQuestions, currentQuestion, correctAnswer, highscore, userInitials;
let scores = [];

function countdown(){
    countdown = setInterval(function(){
        timer.innerHTML = sec + " seconds";
        sec--;
        if (sec < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function startQuiz(){
    startButton.classList.toggle("hidden");
    questionElement.classList.toggle("hidden");
    choicesElement.classList.toggle('hidden');
    lineElement.classList.toggle('hidden');
    // Randomly sorting the array of objects
    randomQuestions = questions.sort(() => Math.random() - .5);
    // Setting the current question to position 0
    currentQuestion = 0;
    // Getting the next question
    nextQuestion();
    countdown();
}

function nextQuestion(){
    resetQuestionContainer();
    if (currentQuestion >= randomQuestions.length) {
      highscore = sec;
      scores.push(highscore);
      window.localStorage.setItem("highscores", JSON.stringify(scores));
      timerContainer.classList.toggle("hidden");
      questionElement.innerText = "All done!";
      createForm();
    }
    else{
      showQuestion(randomQuestions[currentQuestion]);
    }
}

function createForm(){
  const input = document.createElement('input');
  input.placeholder = "Enter initials";
  input.classList.add('initials');
  choicesElement.appendChild(input);
  const submit = document.createElement('button');
  submit.classList.add("submit");
  submit.innerText = "Submit";
  choicesElement.appendChild(submit);
  // Add event listener to submit button
  submit.addEventListener("click", function(){
    userInitials = input.value;
    if(userInitials.length === 2){
      resetQuestionContainer();
      startButton.classList.toggle("hidden");
      viewHighscores();
    }
    else {
      viewHighscores();
    }
  });
}

function resetQuestionContainer() {
    while (choicesElement.firstChild) {
      choicesElement.removeChild(choicesElement.firstChild);
    }
    while (questionElement.firstChild){
        questionElement.removeChild(questionElement.firstChild);
    }
    while(answerArea.firstChild){
      answerArea.removeChild(answerArea.firstChild)
    }
}

function viewHighscores(){
  questionElement.innerText = "Highscores";
  let scores2 = JSON.parse(window.localStorage.getItem('highscores'));
  for (var i = 0; i < scores.length; i++) {
    const p = document.createElement('p');
    p.innerText = userInitials + " - " + scores2[i];
    p.classList.add("score");
    choicesElement.appendChild(p);
  }
}

function showQuestion(question){
    questionElement.innerText = question.title;
    for (let i = 0; i < question.choices.length; i++) {
        const div = document.createElement('div');
        div.innerText = question.choices[i];
        div.classList.add('choicesArea');
        div.addEventListener("click", checkAnswer);
        choicesElement.appendChild(div);
    }
    correctAnswer = question.answer;
}

function checkAnswer(e){
    const guess = e.target;
    if(guess.innerHTML === correctAnswer){
        answerArea.classList.toggle("hidden");
        answerArea.innerHTML = "Correct!";
        currentQuestion++;
        setTimeout(function(){
          nextQuestion();
          answerArea.classList.toggle("hidden");
        }, 1000);
    }
    else{
        answerArea.classList.toggle("hidden");
        mainContainer.classList.toggle("shake");
        timerContainer.classList.toggle("shake");
;        answerArea.innerHTML = "Wrong!";
        sec -= 15;
        currentQuestion++;
        setTimeout(function(){
          nextQuestion();
          answerArea.classList.toggle("hidden");
          mainContainer.classList.toggle("shake");
          timerContainer.classList.toggle("shake");
        }, 1000);
    }
}























//   // Select the startbutton
//   const startButton = document.getElementById('start-button');
//   // Select the fields that will be updating
//   const questionField = document.getElementById('question');
//   const line = document.getElementById('hr-line')
//   const choicesField = document.getElementById('choices');
//   const choiceOptions = document.getElementsByClassName('choiceArea');
//   const choiceText = document.getElementsByClassName('option');
//   const answerArea = document.getElementById('answer');
//   const mainContainer = document.getElementById('container');
//   let timer = document.getElementById('countdown');

//   function loopFirstObject(){
//     // Loop through the array of objects
//     for (var i = 0; i < 1; i++) {
//       questionField.innerHTML = questions[i].title;
//       console.log(questions[i].title);
//       // Loop through the array of choices inside the object
//       for (var x = 0; x < questions[i].choices.length; x++) {
//         const choice = questions[i].choices[x];
//         choiceText[x].innerHTML = choice;
//         console.log(choice);
//       }
//     }
//   }
// // Countdown timer function

//   // Add event listener to start button
//   startButton.addEventListener("click", function(){
//     this.classList.toggle("hidden");
//     questionField.classList.toggle("hidden");
//     choicesField.classList.toggle("hidden");
//     line.classList.toggle("hidden");
//     countdown();
//     loopFirstObject();
//   });

//   // Add an event listener to the choices
//   for (var i = 0; i < choiceText.length; i++) {
//     const choiceTextButton = choiceText[i];
//     choiceTextButton.addEventListener("click", function(){
//       const guess = choiceTextButton.innerHTML;
//       // Check the guess
//       if (guess === questions[i].answer) {
//         answerArea.classList.toggle("hidden");
//         answerArea.innerHTML = "Correct!";
//       }
//       else{
//         answerArea.classList.toggle("hidden");
//         answerArea.innerHTML = "Wrong!";
//         mainContainer.classList.add("shake");
//       }
//     });
//   }
