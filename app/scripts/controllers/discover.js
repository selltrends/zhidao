'use strict';

/**
 * @ngdoc function
 * @name zhidaoApp.controller:DiscoverCtrl
 * @description
 * # DiscoverCtrl
 * Controller of the zhidaoApp
 */
angular.module('zhidaoApp')
  .controller('DiscoverCtrl', function ($scope, $http) {
    $http.get('data/discover.json').success(function(data){
      $scope.discovers = data;
    });
  });
