'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:QuizController
 * @description
 * # QuizController
 * Controller of the angularQuizApp
 */
angular.module('angularQuizApp')
  .controller('QuizController', ['$http','$timeout', 'userNameService', function($http, $timeout, userNameService) {
    var self = this;
  $http.get('data/questions.json').then(function(response) {
    self.questions = response.data.allQuestions;
    }, function(errResponse) {
    console.error('Error while fetching quiz');
  }); 
  self.shared = userNameService.getProperty();
  self.questionNo = 0;
  self.score = 0;
  self.userAnswers = [];
  self.$timeout = $timeout;
  self.nextQuestion = function(choice, index) {
    
    $timeout(function () {
      self.userAnswers.push(choice);
      self.questionsLength = self.questions.length;
      self.answered = index;

      if (self.answered == self.questions[self.questionNo].correctAnswer) {
        self.score++
      }

      self.questionNo++  
      self.labels = ["Correct Answer", "Wrong answer"];
      self.data = [self.score, self.questionNo-self.score];
    }, 1000)
  }

}]);
