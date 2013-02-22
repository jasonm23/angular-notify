angular.module("exampleApp", ['notifier.directives', 'notifier.services'])

// Test controller
.controller("ExampleCtrl", ["$scope", "notifierService",

	function($scope, notify){
	
		$scope.extra_classes = [
			{id: 1, name:"alert"},
			{id: 2, name:"alert alert-danger"},
			{id: 3, name:"alert alert-success"}
		];

		$scope.extra_class = 1;
		$scope.duration = 3000;
		$scope.text = "Hello world";

		$scope.clickExample = function(){
			notify.sendNotification({
				level:$scope.extra_class.name,
				text:$scope.text,
				duration:$scope.duration	
			});
		}
	}
]);