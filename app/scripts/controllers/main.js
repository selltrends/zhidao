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
     this.carNo = 'A989899';
     this.phone = '1289899';
     this.sns = "Please";
   });
