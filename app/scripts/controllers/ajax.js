'use strict';

/**
 * @ngdoc function
 * @name zhidaoApp.controller:AjaxCtrl
 * @description
 * # AjaxCtrl
 * Controller of the zhidaoApp
 */
angular.module('zhidaoApp')
  .controller('AjaxCtrl', function ($scope, $http) {
    $scope.loadData = function (){
      $http.get("data/productData.json").success(function (data){
        $scope.products = data;
      });
    }
  });
