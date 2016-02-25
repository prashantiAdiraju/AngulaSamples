/**
*  Module
*
* Description
*/
angular.module('Employees1', []).
controller('navCtrl', ['$scope','$http', function($scope, $http){
	$http.get('http://www.json-generator.com/api/json/get/bQWPhJeiKW?indent=2').success(function(data) {
		alert(data);
        $scope.menus = data;
    });
}])
