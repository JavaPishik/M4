class Question {
  constructor(title, answers, rightAnswer) {
    this.title = title;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
  }
}

let allQuestions = [
  new Question(
    "Страна с самой высокой продолжительностью жизни",
    ["Китай", "Россия", "США", "Япония"],
    0
  ),
  new Question(
    "Что означает тянуть резину?",
    ["Топить", "Затягивать", "Оторвать"],
    1
  ),
  new Question(
    "Самый популярная книга Джоаны Роулинг",
    ["Изумрудный город", "Шинель", "Гарри поттер"],
    2
  ),
];

let questions = allQuestions;

let currentQuestion = null;

let score = 0;
let bestScore = 0;
let answered = 0;
let maxAnswers = questions.length;

let startButton = document.getElementById("start-button");
let returnButton = document.getElementById("return-button");

let startForm = document.getElementById("start-form");
let qizzForm = document.getElementById("qizz-form");
let resultForm = document.getElementById("result-form");

startButton.addEventListener("click", start);
returnButton.addEventListener("click", showStart);

function start() {
  questions = allQuestions;
  answered = 0;
  score = 0;
  startForm.style.display = "none";
  qizzForm.style.display = "flex";
  resultForm.style.display = "none";
  randomQuestion();
}

function showStart() {
  startForm.style.display = "flex";
  qizzForm.style.display = "none";
  resultForm.style.display = "none";
  startForm.innerHTML = `<h2 class="text">Предыдущий результат: ${score}</h2>
  <h2 class="text">Лучший результат: ${bestScore}</h2>
  <button id="start-button">Начать</button>`;
  document.getElementById("start-button").addEventListener("click", start);
}

function showResult() {
  startForm.style.display = "none";
  qizzForm.style.display = "none";
  resultForm.style.display = "flex";
  resultForm.innerHTML = `<h3>Конец</h3><h4>Результат: ${score}</h4><h4>Лучший результат: ${bestScore}</h4><button id="return-button">Вернуться</button>`;
  document.getElementById("return-button").addEventListener("click", showStart);
}

function answerButtonClick(id) {
  if (id == currentQuestion.rightAnswer) score++;
  answered++;
  if (answered >= maxAnswers) {
    if (bestScore < score) bestScore = score;
    showResult();
    return;
  }
  randomQuestion();
}

function updateQizzForm() {
  let question = currentQuestion;
  qizzForm.innerHTML = `<h1>${question.title}</h1><nav>`;
  for (let answer of question.answers) {
    qizzForm.innerHTML += `<button class='answer-button'>${answer}</button>`;
  }
  qizzForm.innerHTML += `</nav><h1>Решено ${answered} из ${maxAnswers}</h1>`;

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
  questions = questions.filter((element) => element !== currentQuestion);
}
