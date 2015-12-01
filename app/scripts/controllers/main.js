'use strict';

/**
 * @ngdoc function
 * @name zhidaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhidaoApp
 */
 angular.module('zhidaoApp')
   .controller('MainCtrl', function ($scope) {
     this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];
     $scope.carNo = 'A989899';
     $scope.phone = '1289899';
     $scope.sns = 'Please';
     $scope.updateMessage = function(){
       $scope.message = 'Hello ' + $scope.carNo +' ' + $scope.main.awesomeThings[1]+'. Your phone is ' + $scope.phone + '!';
     }
   });
