'use strict';

/**
 * @ngdoc overview
 * @name angularDictionaryApp
 * @description
 * # angularDictionaryApp
 *
 * Main module of the application.
 */
angular
  .module('angularQuizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
