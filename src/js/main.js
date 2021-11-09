"use strict";
// main.js files
// Language: typescript
const questions = {
  "0": {
    question: "Who is the best programmer?",
    options: {
      a: "Sable",
      b: "Pi",
      c: "Missy",
      d: "Mello",
    },
    correct: "a",
  },
  "1": {
    question: "what pet is most liked",
    options: {
      a: "dogs",
      b: "cats",
      c: "snakes",
      d: "none of the above",
    },
    correct: "a",
  },
  "2": {
    question: "What is the most common favorite color",
    options: {
      a: "black",
      b: "pink",
      c: "yellow",
      d: "red",
    },
    correct: "b",
  },
  "3": {
    question: "What is the best class",
    options: {
      a: "computer science",
      b: "math",
      c: "lunch",
      d: "gym",
    },
    correct: "a",
  },
  "4": {
    question: "Best food?",
    options: {
      a: "spaghetti",
      b: "ramen",
      c: "burgers",
      d: "poutine",
    },
    correct: "d",
  },
  "5": {
    question: "Best programming language?",
    options: {
      a: "Rust",
      b: "Golang",
      c: "JavaScript",
      d: "C++",
    },
    correct: "d",
  },
};
const questionsLength = Object.keys(questions).length;
let askedQuestions = [];

////////////////////////////
// DEBUGGING ONLY
////////////////////////////
// for (const [key, val] of Object.entries(questions[0].options)) {
//   console.log(key, val);
// }

/**
 *
 * @param {int} question_number the number question
 * @param {string} answer the answer
 * @return {boolean} if the answer is true or false
 */
function checkAnswer(question_number, answer) {
  let correct;
  // making a regex pattern for the question number's answer
  let pattern = new RegExp(`^${questions[question_number].correct}$`, "i");
  // checking if the answer is correct
  switch (pattern.test(answer)) {
    case true:
      // correct
      correct = true;
      break;
    case false:
      // false
      correct = false;
      break;
    default:
      // throwing a default error in case for some reason the test
      // returns a {NULL} {undefined} or {NaN} answer
      throw new Error("Something went wrong");
      break;
  }
  if (correct == true) {
    alert("Correct!");
    askedQuestions.push(question_number.toString());
  } else {
    alert("Wrong! Try again");
  }
}
/**
 *
 * @param {int} question_number the number of the question that is gonna be asked
 * @return {void} no return
 */
function askQuestion(question_number) {
  if (question_number > questionsLength) {
    // TODO: implement out of bounds error
    return;
  } else if (askedQuestions.length == questionsLength) {
    // TODO: implement all question asked error
  } else if (askedQuestions.includes(question_number.toString())) {
    askQuestion(Math.round(Math.random() * 5));
  } else {
    // getting the question
    let options = [];
    for (const [key, val] of Object.entries(
      questions[question_number].options
    )) {
      options.push(`${key}. ${val}`);
    }
    let display = `${options.join("\n")}`;
    let question = window.prompt(
      `${questions[question_number].question}\nOptions:\n${display}`
    );
    checkAnswer(question_number.toString(), question.toString());
  }
}

function randomNumber() {
  return Math.round(Math.random() * 5);
}
