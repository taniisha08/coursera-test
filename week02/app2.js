(function () {
'use strict';
angular.module('myApp',[])
.controller('msgController',['$scope','$filter',function($scope , $filter){
  $scope.message = 'Hello! Welcome to the week 2 of this course';
  // built in filters
  $scope.upcase = function(){
    var msg = $scope.message;
      $scope.result = $filter('uppercase')(msg);

  };

  $scope.lowercase = function(){
    var msg = $scope.message;
    $scope.result = $filter('lowercase')(msg);
  };

}])
// custom service doubt

// msgController.filter('removeSpace',function(){
//   return function(input)
//   {
//     input = input || '';
//     input = input.replace('hello','hi');
//
//   };

})();
