function startQuiz() {

  // Create an array of questions, choices, and answers
  let questions = [
      {
          title: "What does JS stand for?",
          choices: ["JavaSpoon", "XXXXXJavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["JavaSpoon", "JavaScriptXXXXXX", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["JavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["JavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      },
      {
          title: "What does JS stand for?",
          choices: ["JavaSpoon", "JavaScripXXXt", "JustStyling", "Just sayin"],
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
  let timer = document.getElementById('countdown');

  function loopObjectArray(){
    // Loop through the array of objects
    for (var i = 0; i < questions.length; i++) {
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

  function countdown(){
    let sec = 75;
    countdown = setInterval(function(){
        timer.innerHTML = sec + " seconds";
        sec--;
        if (sec < 0) {
            clearInterval(countdown);
        }
    }, 1000);
    console.log("this is the timer function");
}

  // Add event listener to start button
  startButton.addEventListener("click", function(){
    this.classList.toggle("hidden");
    questionField.classList.toggle("hidden");
    choicesField.classList.toggle("hidden");
    line.classList.toggle("hidden");
    countdown();
    loopObjectArray();
  });

  // Add an event listener to the choices
  for (var i = 0; i < choiceOptions.length; i++) {
    const option = choiceOptions[i];
    option.addEventListener("click", function(){
      // check to see if the option clicked is the same as the answer
      console.log(option.innerHTML);
    });
  }
}

startQuiz();
