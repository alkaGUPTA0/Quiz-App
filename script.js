const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('time-left');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let shuffledQuestions, currentQuestionIndex, score, timeLeft, timerInterval;

// Fetch questions from an API
async function fetchQuestions() {
  const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
  const data = await response.json();
  return data.results.map(question => {
    const formattedQuestion = {
      question: question.question,
      answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
      correctAnswer: question.correct_answer
    };
    return formattedQuestion;
  });
}

// Start quiz
async function startQuiz() {
  score = 0;
  resultContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  nextButton.classList.add('hidden');
  shuffledQuestions = await fetchQuestions();
  currentQuestionIndex = 0;
  setNextQuestion();
}

// Set next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  startTimer();
}

// Show question
function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    if (answer === question.correctAnswer) {
      button.dataset.correct = true;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

// Reset UI state
function resetState() {
  clearStatusClass();
  nextButton.classList.add('hidden');
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Select answer
function selectAnswer(e) {
  clearInterval(timerInterval);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  if (correct) {
    score++;
  }
  setStatusClass(selectedButton, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
  });
  nextButton.classList.remove('hidden');
}

// Set button status
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

// Clear button status
function clearStatusClass() {
  Array.from(answerButtons.children).forEach(button => {
    button.classList.remove('correct');
    button.classList.remove('wrong');
  });
}

// Timer function
function startTimer() {
  timeLeft = 10;
  timerElement.innerText = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextButton.classList.remove('hidden');
    }
  }, 1000);
}

// Show results at the end of the quiz
function showResult() {
  questionContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreElement.innerText = score;
}

// Event Listeners
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    setNextQuestion();
  } else {
    showResult();
  }
});

restartButton.addEventListener('click', startQuiz);

// Start quiz on page load
startQuiz();