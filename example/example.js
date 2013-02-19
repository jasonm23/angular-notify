angular.module("exampleApp", ['notifier.directives', 'notifier.services'])

// Test controller
.controller("ExampleCtrl", ["$scope", "notifierService",

	function($scope, notify){
	
		$scope.clickExample = function(){
			notify.sendNotification({
				"level":"warning",
				"text":"Your in trouble!!!",
				"duration":3000		
			});
		}
	
		$scope.xmp = "test";
	}
]);