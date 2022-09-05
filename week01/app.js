(function(){
'use strict';
angular.module('myApp',[])

.controller('nameCalculator',function($scope){
$scope.name = "";
$scope.totalValue = 0;
$scope.displayNumeric = function(){
  var totalNameValue = calculateNumericString($scope.name);
  $scope.totalValue = totalNameValue;
};

function calculateNumericString(string){
  var totalStringValue = 0;
  for(var i=0; i<string.length ; i++){
    totalStringValue += string.charCodeAt(i);
  }
  return totalStringValue;
}

})
.controller('imageController',function($scope){
  $scope.state = 'off';
  $scope.switchOn = function() {
    $scope.state = 'on';
  }
  $scope.switchOff = function() {
    $scope.state = 'off';
  }
})

.controller('DIController', DIController);

function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "tanisha";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  // console.log($injector.annotate(DIController));
}

// function AnnonateMe(name, job, blah) {
//   return "Blah!";
// }
// console.log(DIController.toString());

})();
