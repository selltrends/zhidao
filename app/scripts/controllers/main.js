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

    $scope.car.phone = 138888;

    $scope.matchPattern = new RegExp("^[a-z]{6}$");
    $scope.phone=13800138000;

    $scope.todos = [
      {id:100,place:"Store",action:"Get groceries", complete:false},
      {id:200,place:"Home",action:"Call plumber",complete:false},
      {id:300,place:"Store",action:"Buy running shoes",complete:true}
    ];



    $scope.getError = function(error){
      if(angular.isDefined(error)){
        if(error.required){
          return "请填写";
        } else if(error.email){
          return "请输入有效邮件格式";
        } else if(error.pattern){
          return "没有这样的车牌号";
        }
      }
    };

  });
