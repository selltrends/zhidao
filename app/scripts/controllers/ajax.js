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
      $http.get('data/productData.json').success(function (data){
        $scope.products = data;
      });
    };
  });

  angular.module('zhidaoApp')
    .controller('AjaxMCtrl', function ($scope, $http) {
      $scope.loadXmlData = function (){
        $http.get('data/productData.xml').then(function (response){
          $scope.products =[];
          var productElems = angular.element(response.data.trim()).find('product');
          for(var i=0; i < productElems.length; i++){
            var product = productElems.eq(i);
            $scope.products.push({
              name: product.attr('name'),
              category: product.attr('category'),
              price: product.attr('price')
            });
          }
        });
      };
    });
