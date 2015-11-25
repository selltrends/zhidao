'use strict';

/**
 * @ngdoc function
 * @name zhidaoApp.controller:ServiceCtrl
 * @description
 * # ServiceCtrl
 * Controller of the zhidaoApp
 */
angular.module('zhidaoApp')
  .controller('ServiceCtrl', function ($scope, $http) {
    $http.get('data/service.json').success(function(data){
      $scope.services = data;
    });
  });
