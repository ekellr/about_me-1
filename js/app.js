'use strict';

var questionData = [
                    ["yesNo", "Does he sail?", "yes", 1],
                    ["yesNo", "Can he juggle?", "no", 1],
                    ["yesNo", "Is he a morning person?", "no", 1],
                    ["yesNo", "Is he from Seattle?", "no", 1],
                    ["yesNo", "Does he play the cello?", "no", 1],
                    ["interval", "What is his favorite number?", 42, 4],
                    ["multiple", "What is his favorite food?", [2 ,["pizza","teriyaki","Indian"]], 6]
                  ];

// console.log(questionsData);

// Initialization variables to accumulate results
var answersArray = [];
var scoreArray = [];
var scoreTotal = 0;

function highLowFeedback(answer, rightAnswer){
  if(answer ){

    if (answer < rightAnswer) {
      alert('Answer too low!')
    } else if (answer > rightAnswer){
      alert('Answer too high!')
    }
    else if{
      alert('You got it right!!!')
    }

  } else {
      alert('I want a number.')
  }
}
// This loop takes a question and prompts the user for an answer
// It then calls another function to check if the user answer is correct
// Finally, it pushes the user answer and score to arrays, and adds to score total
for (i = 0; i < questionsData.length; i++)
  {
    var questionInfo = questionData[i];

    var questionType = questionInfo[0];
    var question = questionInfo[1];
    var rightAnswer = questionInfo[2];
    var numTries = questionInfo[3];

    var score;

    console.log(question);

    if questionType === 'yesNo'){
      var answer = prompt(question + ' yes or no (y or n)').toLowerCase();

      if (answer) {
        // Either the first letter or full answer - can be a mix or lower and upper case.
        var answerMatchBool = ((answer === rightAnswer) || (answer === rightAnswer));
        console.log(answer);
        console.log(answerMatchBool);
      }

    else if (questionType === 'interval') {
      for (var i = numTries; i >= 0; i--){
        var answer = parseInt(prompt(question + ' You get 4 tries.'));
        highLowFeedback(answer, rightAnswer)
      }

    }

    else if (questionType === 'multiple') {
      var answerIndex = rightAnswer[0];
      var answerList = rightAnswer[1];

      for (var i = numTries; i >= 0; i--){

        var answer = prompt(question[1] + ' Choose among these options: ' + answerList);
        if(answer){
          if (answer === answerList[answerIndex]){
            alert('You got it right!!!')
          }
          else if (answerList.includes(answer)){
            alert('You picked the wrong answer.')
          }
          else{
            alert('You didn\'t enter the one of the choices.' )
          }
        }
      } else{
        alert('You need to enter a text.')
      }
    }

    if (answerMatchBool){
      score = 1;
    } elseif {
      score = 0;
    }

    answersArray.push(answer);
    scoreArray.push(score);
    scoreTotal += score;
  };
}
// prints final results
console.log('These are your answers: ' + answersArray);
console.log('These are your points for each question: ' + scoreArray);
console.log('This is your score total: ' + scoreTotal);

alert('Congratulations! You got ' + scoreTotal + ' (out of ' + scoreArray.length + ') questions about Dan correct.')
