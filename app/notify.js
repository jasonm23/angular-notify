/**
 * @author Nathan Norton <nthnnrtn@gmail.com>
 */
angular.module('notify', [])

// The simple notify directive.
.directive('notify', function(){
	
	return {
		
		replace:false, 
		restrict:'A',
		link: function(scope, iElement, iAttrs, controller){
			
			var ele = $(iElement);
			
			// Default: make sure the element is hidden.
			ele.css("display", "none");

			function showAlert(){
				if(ele.css("display") === "none"){
					ele.slideDown("slow");
				}
				
				setTimeout(function(){hideAlert();}, 3000);
			}
			

			function hideAlert(){
				ele.slideUp("slow");
			}	

			scope.$watch(iAttrs.model, function(newVar, oldVar){
				if(newVar !== oldVar){
					ele.html( newVar );
					showAlert();
				}
			},true);
		}
	};
});