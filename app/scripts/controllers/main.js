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
    $scope.loadData = function () {
        var config = {
          opt: "getcode",
          t: new Date().getTime()
        };
        $http.get("/Ajax/Authentication.ashx",config).success(function (data) {
          $scope.phone = data;
        });
    }
    
    $scope.message = "Ready";
    $scope.matchPattern = new RegExp("^[\u4E00-\u9FA5][\da-zA-Z]{6}$");

    $scope.getError = function (error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return "字段不能为空";
        } else if (error.email) {
          return "请输入有效的电子邮件地址";
        } else if (error.pattern) {
          return "请输入格式正确的南宁车牌号码";
        }}
      }
  });
