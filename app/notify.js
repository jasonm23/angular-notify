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
			
			var extra_class = "";
			var duration = 1000;
			
			// Default: make sure the element is hidden.
			ele.css("display", "none");

			function showAlert(){
				if(ele.css("display") === "none"){
					ele.slideDown("slow");
				}				
				setTimeout(function(){hideAlert();}, duration);
			}
			
			function hideAlert(){
				ele.slideUp("slow");
			}

			// Listen to the broadcast the service sends out.
			scope.$on("notify.newNotification", function(event, somethingelse){
				
				// Remove the old applied class.
				ele.removeClass(extra_class);
				
				extra_class = somethingelse.level;
				duration = somethingelse.duration;

				ele.html(somethingelse.text);
				ele.addClass(extra_class);

				showAlert();
			});
		}
	};
});