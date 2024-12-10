// Flashcards data
let flashCards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the largest planet in the solar system?", answer: "Jupiter" },
  { question: "What is the chemical symbol for water?", answer: "H2O" },
];
let currentCardIndex = 0;

// Function to start flashcards
function startFlashCards() {
  const content = document.getElementById("content");
  currentCardIndex = 0; // Reset index
  showFlashCard(content);
}

function showFlashCard(content) {
  if (currentCardIndex < flashCards.length) {
    const card = flashCards[currentCardIndex];
    content.innerHTML = `
      <h2>Interactive Flashcards</h2>
      <p>${card.question}</p>
      <button onclick="showAnswer()">Show Answer</button>
    `;
  } else {
    content.innerHTML = "<p>All questions are done!</p>";
  }
}

function showAnswer() {
  const content = document.getElementById("content");
  const card = flashCards[currentCardIndex];
  content.innerHTML += `<p><strong>Answer:</strong> ${card.answer}</p>`;
  currentCardIndex++;
  content.innerHTML += `<button onclick="nextFlashCard()">Next Question</button>`;
}

function nextFlashCard() {
  const content = document.getElementById("content");
  showFlashCard(content);
}

// Multiple choice questions data
let mcqQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Madrid", "Rome"],
    correct: "Paris",
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correct: "Jupiter",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "CH4"],
    correct: "H2O",
  },
];
let currentMCQIndex = 0;

// Function to start MCQs
function startMCQ() {
  const content = document.getElementById("content");
  currentMCQIndex = 0; // Reset index
  showMCQ(content);
}

function showMCQ(content) {
  if (currentMCQIndex < mcqQuestions.length) {
    const question = mcqQuestions[currentMCQIndex];
    const optionsHTML = question.options
      .map(
        (option) =>
          `<button onclick="checkAnswer('${option}')">${option}</button>`
      )
      .join("");
    content.innerHTML = `
      <h2>Multiple Choice Questions</h2>
      <p>${question.question}</p>
      ${optionsHTML}
    `;
  } else {
    content.innerHTML = "<p>All questions are done!</p>";
  }
}

function checkAnswer(selected) {
  const question = mcqQuestions[currentMCQIndex];
  const content = document.getElementById("content");
  if (selected === question.correct) {
    content.innerHTML += `<p style="color:green;">Correct Answer!</p>`;
  } else {
    content.innerHTML += `<p style="color:red;">Wrong Answer. The correct answer is: ${question.correct}</p>`;
  }
  currentMCQIndex++;
  content.innerHTML += `<button onclick="showMCQ(document.getElementById('content'))">Next Question</button>`;
}
