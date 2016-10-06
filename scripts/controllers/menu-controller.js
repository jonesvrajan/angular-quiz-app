'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:menuCtrl
 * @description
 * # menuCtrl
 * Controller of the angularQuizApp
 */
angular.module('angularQuizApp')
  .controller('MenuController', ['$location', function($location){
    this.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? 'active' : '';
    };

  }]);
