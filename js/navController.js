mainApp.controller('navController', ['$scope','Menu', function($scope, Menu){
  //$scope.menus=Menu.obj();
  
  Menu.obj().success(function(data){
    $scope.menus = data;//JSON.parse(JSON.stringify(data));
    console.log(data); 
  }).error(function(status){

});
}]);
