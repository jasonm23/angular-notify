angular.module('notify', [])

// The simple notify directive.
.directive('notify', function(){
	
	return {
		template:'<div id="notify-box"></div>',
		replace:true,
		restrict:'E',
		link: function(scope, iElement, iAttrs, controller){

			var showing = false;

			function showAlert(){
				if($("#notify-box").css("display") === "none"){
					$("#notify-box").slideDown("slow");
				}
				setTimeout(function(){hideAlert();}, 3000);
			}

			function hideAlert(){
				$("#notify-box").slideUp("slow");
			}	

			scope.$watch(iAttrs.model, function(newVar, oldVar){
				if(newVar != oldVar){
					$("#notify-box").html("You've been notified!:" + newVar);
					showAlert();
				}
			},true);

		}
	}
})


// The service to modify the directive.
.provider('notify', function(){
	
	return {
	
		$get: function(){
			// does nothing
			alert("something");
		}
	}
});
