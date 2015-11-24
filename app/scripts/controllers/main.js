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

    $scope.addUser = function(userDetails){
      if (myForm.$valid) {
        $scope.message = userDetails.name + "(" + userDetails.email + ")(" + userDetails.agree + ")";
      }else {
        $scope.showValidation = true;
      }

    }

    $scope.message = "Ready";

    $scope.getError = function(error){
      if(angular.isDefined(error)){
        if(error.required){
          return "请填写";
        } else if(error.email){
          return "请输入有效邮件格式";
        }
      }
    }

  });
