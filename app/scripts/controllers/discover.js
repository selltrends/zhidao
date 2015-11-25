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
  })
  .controller('DiscoverDetailCtrl', function ($scope, $http, $routeParams) {
    $http.get('data/' + $routeParams.discoverId + '.json').success(function(data){
      $scope.discover = data;
    });
  });
