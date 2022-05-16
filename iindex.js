var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Enter your Good Name ");
console.log("welcome " + userName );
console.log(userName + ", Let's start the Quiz.")
console.log("------------------------")

function play(question,answer)
  {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("you are Right");
      score = score + 1;
    }
    else{
      console.log("you are wrong");
    }
    console.log("your score is " + score)
    console.log("------------------")
  }



var questionAnswer = [
  { question : "where do I live ?",
    answer : "rahuri"},
  { question : "which company I do work ?",
    answer : "Wipro" },
  { question : "What is My Education ? ",
    answer : "BE computer"},
  { question : "What is My Surname? ",
    answer : "Tanpure"},
  { question : "Which city do I like most ?",
    answer : "Pune"},
  { question : "who is my bestfriend? ",
    answer : "prajakta"},
  { question : "My brother name is ? ",
    answer : "Ajinkya"},
  { question : "who is my favourite cricketer ",
    answer : "Rohit sharma"},
  { question : "How many members in my family? ",
    answer : "4"},
  { question : "Which company mobile I used",
    answer : "Redmi"}
]

for (var i=0; i<questionAnswer.length;i++)
  {
    var currentQuestion = questionAnswer[i];
    play(currentQuestion.question,currentQuestion.answer);
  }


console.log("Thank you for attending Quiz");
console.log("Your final score is: ", + score);
console.log("Bye-Bye")