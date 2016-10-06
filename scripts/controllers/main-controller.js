'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:MainController
 * @description
 * # MainController
 * Controller of the angularQuizApp
 */
angular.module('angularQuizApp')
  .service('userNameService', function () {
    var userName = '';

    return {
        getProperty: function () {
            return userName;
        },
        setProperty: function(value) {
            userName = value;
        }
    };
  })
  .controller('MainController',  function($window , userNameService) {
    var self = this;
    self.enteredUserName = function () {
      
      userNameService.setProperty(self.userName);
      self.test = userNameService.getProperty();
      $window.location.href ='https://jonesvrajan.github.io/angular-quiz-app/#/quiz';
    }

})

