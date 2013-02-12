angular.module("exampleApp", ['notify'])

// Test controller
.controller("ExampleCtrl", ["$scope", "notify", function($scope){
	
	$scope.clickExample = function(){
		notify.newNotification({
			"level":"warning",
			"text":"Your in trouble!!!",
			"duration":3000		
		});
	}


	$scope.xmp = "test";


}]);
