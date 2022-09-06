(function () {
'use strict';
 var groceryList = [
   {
     name : 'carrots',
     quantity : '4kg'
   },
   {
     name: 'donuts',
     quantity : 4
   },
   {
     name : 'Chips',
     quantity : 10,
   }
 ];


angular.module('myApp',[])

// messageController
.controller('msgController',
            ['$scope','$filter','removeSpaceFilter','calcValueFilter',
            function($scope , $filter, removeSpaceFilter,calcValueFilter){
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

  $scope.removeSpace = function(){
    var msg = $scope.message;
    $scope.result = $filter('removeSpace')(msg);
  }
  $scope.calcValue = function(){
    var msg = $scope.message;
    $scope.result = $filter('calcValue')(msg);
  }

}])

.controller('counterController',
            ['$scope',
            function($scope){
            $scope.count = 0;
            $scope.upCounter = function(){
            $scope.count++;
          }
  $scope.watchers = $scope.$$watchersCount;
  $scope.$watch('count',function(newValue,oldValue){
    $scope.oldValue = oldValue;
    $scope.newValue = newValue;
  })

}])

.controller('bindingController',
          ['$scope',
          function($scope){
  $scope.name = 'Tanisha';
  $scope.firstName = 'tanisha';
  $scope.fullName = $scope.name + ' ' + 'Tomar';
}])

.controller('loopController',
            ['$scope',
            function($scope){
$scope.groceryList = groceryList;

$scope.addItem = function()
{
  var newItem = {
    name: $scope.newItemName,
    quantity: $scope.newItemQuantity
  }

  if(newItem.name && newItem.quantity)
  {
    $scope.groceryList.push(newItem);
  }
}
}])

// custom filter
.filter('removeSpace',function(){
  return function(msg){
    let str ='';
    str += msg[0];
    for(var i=1; i<msg.length;i++)
    {
      if(msg[i]!=' ')
      {
        str += msg[i];
      }
    }
    return str;
}
})

.filter('calcValue',function(){
  return function(msg){
    var totalStringValue = 0;
    for(var i=0; i<msg.length ; i++){
      totalStringValue += msg.charCodeAt(i);
    }
    return totalStringValue;
  }
})

})();
