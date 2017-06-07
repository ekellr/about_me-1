'use strict'

// This was abandoned because of the potential for a question/answer array mismatches
// var questions = [
//                   "Does he sail?",
//                   "Can he juggle?",
//                   "Is he a morning person?",
//                   "Is he from Seattle?",
//                   "Does he play the cello?"
//                 ];
//
// var correctAnswerArray = ["yes","no","no","no","n0"];

// Decided that a dictionary with questions as keys, and the question answer
// as the associated value would be easier to manage
var questionsDict = {
                      "Does he sail?":"yes",
                      "Can he juggle?":"no",
                      "Is he a night person?":"yes",
                      "Did he grow up in Seattle?":"no",
                      "Does he play the cello?":"no"
                    };
// console.log(questionsDict);

// Initialization variables to accumulate results
var answersArray = [];
var scoreArray = [];
var scoreTotal = 0;

// This function takes in a question and prompts the user for an answer
// It then calls another function to check if the user answer is correct
// Finally, it pushes the user answer and score to arrays, and adds to score total
var theQuestioner = function (question)
  {
    var answer = prompt(question + ' yes or no (y or n)');
    var score = theValidator(answer.toLowerCase(), question);

    answersArray.push(answer);
    scoreArray.push(score);
    scoreTotal += score;
  };

// This takes the users answer/current question and computes a score
var theValidator = function (answer, question)
    {
      if (answer) {
        // looks up right answer to the question
        var rightAnswer = questionsDict[question];
        // Either the first letter or full answer - can be a mix or lower and upper case.
        var answerMatchBool = ((answer === rightAnswer[0]) || (answer === rightAnswer));
        console.log(question);
        console.log(answer);
        console.log(answerMatchBool);
        if (answerMatchBool){
          return 1;
        }
      }
      return 0;
    };

// returns an array of keys for dictionary
var questionsArray = Object.keys(questionsDict);
// calls theQuestioner function for each item in array
questionsArray.forEach(theQuestioner);

// prints final results
console.log('These are the questions with answers:');
console.log(questionsDict);
console.log('These are your answers: ' + answersArray);
console.log('These are your points for each question: ' + scoreArray);
console.log('This is your score total: ' + scoreTotal);

alert('Congratulations! You got ' + scoreTotal + ' (out of ' + scoreArray.length + ') questions about Dan correct.')
