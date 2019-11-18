function startQuiz() {

  // Create an array of questions, choices, and answers
  let questions = [
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
          choices: ["JavaSpoon", "JavaScript", "JustStyling", "Just sayin"],
          answer: "JavaScript"
      }
  ];

  // Select the startbutton
  const startButton = document.getElementById('start-button');
  // Select the fields that will be updating
  const questionField = document.getElementById('question');
  const choicesField = document.getElementById('choices');
  const choiceOptions = document.getElementsByClassName('choiceArea');
  const choiceText = document.getElementsByClassName('option');

  // Add event listener to start button
  startButton.addEventListener("click", function(){
    this.classList.toggle("hidden");
    questionField.classList.toggle("hidden");
    choicesField.classList.toggle("hidden");
  });

  // Loop through the array of objects
  for (var i = 0; i < questions.length; i++) {
    questionField.innerHTML = questions[i].title;
    // Loop through the array of choices inside the object
    for (var i = 0; i < questions[i].choices.length; i++) {
      const choice = questions[i].choices[i];
      choiceText[i].innerHTML = [i+1] + ". " + choice;
    }
  }

  // Add an event listener to the choices
  for (var i = 0; i < choiceOptions.length; i++) {
    const option = choiceOptions[i];
    option.addEventListener("click", function(){
      // check to see if the option clicked is the same as the answer

    });
  }
}

startQuiz();
