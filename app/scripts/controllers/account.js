'use strict';

/**
 * @ngdoc function
 * @name zhidaoApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the zhidaoApp
 */
 angular.module('zhidaoApp')
   .controller('AccountCtrl', function ($scope, $http) {
     $http.get('data/account.json').success(function (data){
       $scope.accounts = data;
     });
   });
