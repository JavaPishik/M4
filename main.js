let start = document.getElementById("start-form");
let main = document.getElementById("qizz-form");
let result = document.getElementById("result-form");

let allQuestions = [
  {
    question: "2+2",
    correct: 4,
    answers: [4, 5, 10, 120],
  },
  {
    question: "4+4",
    correct: 8,
    answers: [1, 8, 12],
  },
  {
    question: "5+5",
    correct: 10,
    answers: [-5, 8, 12, 10],
  },
  {
    question: "16 - 18",
    correct: -2,
    answers: [-2, 25, -6],
  },
  {
    question: "20 + 220",
    correct: 240,
    answers: [240, -240, 42],
  },
];

let bestCount = 0;
let currentQuestion = 0;
let countSuccess = 0;

function startProgram() {
  currentQuestion = 0;
  countSuccess = 0;
  start.classList.add("none");
  main.classList.remove("none");
  generateQuestion();
}

function generateQuestion() {
  let current = allQuestions[currentQuestion];
  let question = current.question;
  let answers = current.answers;

  main.innerHTML = `<h1>${question}</h1>`;
  let btnBlock = "";

  for (let answer of answers)
    btnBlock += `<button class="answer-button" onclick='checkQuestion(${answer})'>${answer}</button>`;

  main.innerHTML += `<nav>${btnBlock}</nav>`;
  main.innerHTML += `</nav><h1>Решено ${currentQuestion} из ${allQuestions.length}</h1>`;
}

function checkQuestion(answer) {
  let current = allQuestions[currentQuestion];
  let correct = current.correct;

  if (answer == correct) countSuccess++;

  currentQuestion++;

  if (currentQuestion >= allQuestions.length) {
    stopQuiz();
    return;
  }

  generateQuestion();
}

function stopQuiz() {
  if (bestCount < countSuccess) bestCount = countSuccess;

  main.classList.add("none");
  result.classList.remove("none");

  result.innerHTML = `<h3>Конец</h3>
    <h4>Результат: ${countSuccess}</h4>
    <h4>Лучший результат: ${bestCount}</h4>
    <button class="button" onclick='back()'>Вернуться</button>`;
}

function back() {
  start.classList.remove("none");
  result.classList.add("none");

  start.innerHTML = `
      <h3>Конец</h3>
      <h2 class="text">Предыдущий результат: ${countSuccess}</h2>
      <h2 class="text">Лучший результат: ${bestCount}</h2>
      <button class="button" id="start-button" onclick="startProgram()">Начать</button>
  `;
}
