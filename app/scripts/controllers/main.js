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
    $scope.phone = 138003800;
    $scope.addUser = function (userDetails) {
                    $scope.message = userDetails.name
                        + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
}
                $scope.message = "Ready";
                $scope.matchPattern = new RegExp("^[\u4E00-\u9FA5][\da-zA-Z]{6}$");
  });
