'use strict';

const outputDiv = document.getElementById('output');
const quizKey = [ 
    ['2 + 2 =', 4],
    ['5 - 3 =', 2],
    ['8 / 2 =', 4],
    ['3 * 3 =', 9],
    ['9 % 4 =', 2]
];
let correctCount = 0;
let question;
let answer;
let input;
let html = '';
let correctQuestions = [];
let incorrectQuestions = [];

const print = (message) => {
    outputDiv.innerHTML = message;
}

const listBuilder = (arr) => {
    let listString = `<ul>`;
    for (let i = 0; i < arr.length; i++) {
        listString += `<li>${arr[i]}</li>`;
    }
    listString += `</ul>`;
    return listString;
}

for (let i = 0; i < quizKey.length; i++) {
    question = quizKey[i][0];
    answer = quizKey[i][1];
    input = parseInt(prompt(question));
    if (input === answer) {
        correctCount++;
        correctQuestions.push(question);
    } else {
        incorrectQuestions.push(question);
    }
}

html += `<h2>You got ${correctCount} questions right.</h2>`;
html += `<h2>These are the questions you got right:</h2>`;
html += `${listBuilder(correctQuestions)}`
html += `<h2>These are the questions you got wrong:</h2>`;
html += `${listBuilder(incorrectQuestions)}`
print(html);
