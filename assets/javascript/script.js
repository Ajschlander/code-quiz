function startQuiz() {

  // Create an array of questions, choices, and answers
  let questions = [
      {
          title: "What does JS stand for?",
          choices: ["FIRSTJavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["SECONDJavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["THIRDJavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["FOURTHJavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["FIFTHJavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      }
  ];

  // Select the startbutton
  const startButton = document.getElementById('start-button');
  // Select the fields that will be updating
  const questionField = document.getElementById('question');
  const line = document.getElementById('hr-line')
  const choicesField = document.getElementById('choices');
  const choiceOptions = document.getElementsByClassName('choiceArea');
  const choiceText = document.getElementsByClassName('option');
  const answerArea = document.getElementById('answer');
  const mainContainer = document.getElementById('container');
  let timer = document.getElementById('countdown');

  function loopFirstObject(){
    // Loop through the array of objects
    for (var i = 0; i < 1; i++) {
      questionField.innerHTML = questions[i].title;
      console.log(questions[i].title);
      // Loop through the array of choices inside the object
      for (var x = 0; x < questions[i].choices.length; x++) {
        const choice = questions[i].choices[x];
        choiceText[x].innerHTML = choice;
        console.log(choice);
      }
    }
  }
// Countdown timer function
  function countdown(){
    let sec = 75;
    countdown = setInterval(function(){
        timer.innerHTML = sec + " seconds";
        sec--;
        if (sec < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

  // Add event listener to start button
  startButton.addEventListener("click", function(){
    this.classList.toggle("hidden");
    questionField.classList.toggle("hidden");
    choicesField.classList.toggle("hidden");
    line.classList.toggle("hidden");
    countdown();
    loopFirstObject();
  });

  // Add an event listener to the choices
  for (var i = 0; i < choiceText.length; i++) {
    const choiceTextButton = choiceText[i];
    choiceTextButton.addEventListener("click", function(){
      const guess = choiceTextButton.innerHTML;
      // Check the guess
      if (guess === questions[i].answer) {
        answerArea.classList.toggle("hidden");
        answerArea.innerHTML = "Correct!";
      }
      else{
        answerArea.classList.toggle("hidden");
        answerArea.innerHTML = "Wrong!";
        mainContainer.classList.add("shake");
      }
    });
  }

}

startQuiz();
