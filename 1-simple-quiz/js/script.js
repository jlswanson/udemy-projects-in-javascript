function submitAnswers(){
  var total = 5;
  var score = 0;

  //Set correct answers
  var answers = ["b","a","d","b","d"];

  //Validate and grade the quiz
  for(i = 0; i < total; i++){
    //Set currentQuestion equal to the value the user has input for the current question
    var currentQuestion = document.forms["quizForm"]["q"+i].value;
    //Check to see if the user has answered the current question
    if(currentQuestion == null || currentQuestion == ''){
      var questionNumber = i+1;
      alert('You missed question ' + questionNumber + '!');
      score = 0;
      return false;
    } else { //Begin grading the current question
      var currentAnswer = answers[i];
      //Check answers and increase score for each correct answer
      if(currentQuestion == currentAnswer){
        score++;
      }
    }
  }
  //Displaying 'point' when score is equal to 1, instead of 'points'
  var pointText = 'points';
  if(score === 1){
    pointText = 'point';
  }
  alert('You scored ' + score + ' ' + pointText + ' out of ' + total + '!');
  return false;
}
