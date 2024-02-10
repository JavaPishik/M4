let start = document.getElementById("start-form");
let main = document.getElementById("qizz-form");
let result = document.getElementById("result-form");

let allQuestions = [
  {
    question: "2+2",
    correct: 4,
    answers: [4, 5, 10, 12],
  },
  {
    question: "4+4",
    correct: 8,
    answers: [1, 5, 8, 12],
  },
];

let currentQuestion = 0;
let countSuccess = 0;
