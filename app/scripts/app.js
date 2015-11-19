'use strict';

/**
 * @ngdoc overview
 * @name zhidaoApp
 * @description
 * # zhidaoApp
 *
 * Main module of the application.
 */
angular
  .module('zhidaoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ajax', {
        templateUrl: 'views/ajax.html',
        controller: 'AjaxCtrl',
        controllerAs: 'ajax'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
