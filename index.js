var readLineSync=require("readline-sync");
var score=0;
var userName=readLineSync.question("What is your name? ");
console.log("Welcome "+userName+ "! Do you know vishal");

//play function
function play(question, answer)
{
var userAnswer=readLineSync.question(question);

  if (userAnswer===answer)
  {
    console.log("Correct");
    score=score+1;
  }
  else
  {
    console.log("Incorrect")
    score=score-1;
  }
console.log("Current Score:",score);
console.log("--------------------------------------");
}

//array of object
var questions=[
    {
    question: "Where do I live? ",
    answer: "Udaipur"
    },
    {
    question: "I got bits in which iteration?",
    answer:"2"
    },
    {question:"How many students are in both mech&design?",
    answer: "41"
    },
    {
      question: "how many district in Rajasthan?",
    answer: "33"
    }
  ];

//loop
for (var i=0; i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your final score:",score)