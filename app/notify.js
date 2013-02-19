angular.module('notifier.services', [])


.factory('notifierService', ['$rootScope', function($scope){

	var notifyImpl = {};

	/*
	 * Sends out the notification.
	 *
	 * @param props properites object for the nofication.
	 */
	notifyImpl.sendNotification = function( props ){
		$scope.$broadcast("notify.newNotification", props);
	}
	return notifyImpl;
}]);


angular.module('notifier.directives', [])
.directive('notify', function(){

	return {
		
		replace:false, 
		restrict:'A',
		link: function(scope, iElement, iAttrs, controller){
			
			var ele = $(iElement);
			
			// Default: make sure the element is hidden.
			ele.css("display", "none");

			function showAlert(element){
				if(ele.css("display") === "none"){
					ele.slideDown("slow");
				}				
				setTimeout(function(){hideAlert();}, 3000);
			}
			
			function hideAlert(element){
				ele.slideUp("slow");
			}

			// When there is a new notification, we create a new element and 
			// bind the events to close it.
			scope.$on("notify.newNotification", function(event, somethingelse){
				var n_ele = _.clone(ele);
			});
		}
	};
});