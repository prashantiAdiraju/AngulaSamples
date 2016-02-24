angular.module('mainApps',[]).
      factory("Menu", function($http){ 
      return {
		obj : function(){        
			return  $http.get('http://www.json-generator.com/api/json/get/bQWPhJeiKW?indent=2');
			}
		};

    });
