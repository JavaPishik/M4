class Question {}

let score = null;
let bestScore = null;
let answered = 0;

let answerButtons = document.getElementsByClassName("answer-button");

let startButton = document.getElementById("start-button");

let startForm = document.getElementById("start-form");
let qizzForm = document.getElementById("qizz-form");
let resultForm = document.getElementById("result-form");

startButton.addEventListener("click", start);

for (let i = 0; i < answerButtons.length; i++) {
  btn = answerButtons[i];
  btn.addEventListener("click", () => {
    answerButtonClick(i);
  });
}

function start() {
  startForm.style.display = "none";
  qizzForm.style.display = "flex";
}

function answerButtonClick(id) {
  console.log("Clicked " + id);
}
