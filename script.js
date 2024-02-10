class Question {
  constructor(title, answers, rightAnswer) {
    this.title = title;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
  }
}

let questions = [
  new Question("4+4=?", ["2", "6", "8", "12"], 2),
  new Question("8+8=?", ["2", "6", "8", "16"], 3),
];

let currentQuestion = null;

let score = null;
let bestScore = null;
let answered = 0;

let startButton = document.getElementById("start-button");

let startForm = document.getElementById("start-form");
let qizzForm = document.getElementById("qizz-form");
let resultForm = document.getElementById("result-form");

startButton.addEventListener("click", start);

function start() {
  answered = 0;
  startForm.style.display = "none";
  qizzForm.style.display = "flex";
  randomQuestion();
}

function answerButtonClick(id) {
  if (id == currentQuestion.rightAnswer) {
    answered++;
  }
  randomQuestion();
}

function updateQizzForm() {
  let question = currentQuestion;
  qizzForm.innerHTML = `<h1>${question.title}</h1><nav>`;
  for (let answer of question.answers) {
    qizzForm.innerHTML += `<button class='answer-button'>${answer}</button>`;
  }
  qizzForm.innerHTML += `</nav><h1>Решено ${answered} из ${questions.length}</h1>`;

  let answerButtons = document.getElementsByClassName("answer-button");
  for (let i = 0; i < answerButtons.length; i++) {
    btn = answerButtons[i];
    btn.addEventListener("click", () => {
      answerButtonClick(i);
    });
  }
}

function randomQuestion() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  updateQizzForm();
  questions.pop(currentQuestion);
}
