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
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'discover'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
