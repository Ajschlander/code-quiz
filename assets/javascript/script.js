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
  // Select the
  const questionField = document.getElementById('question');
  const choicesField = document.getElementById('choices');

  // Add event listener to start button
  startButton.addEventListener("click", function(){
    this.classList.toggle("hidden");
    questionField.classList.toggle("hidden");



  });

}

startQuiz();
