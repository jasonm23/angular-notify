'use strict';


describe('notify directives', function() {

	var scope, ctrl;

	beforeEach(module('notifier.directives')); 


  describe('Notify', function() {

	it('should default to display none', function() {
	  
	  inject(
		function($compile, $rootScope){

			// Compile a simple dom example of what our 
			var element = $compile("<div notify></div>")($rootScope);
			expect(element.css("display")).toEqual("none");
		}
	  );
	});


 });
});

describe('notify service', function(){

	beforeEach(module("notifier.services"));

	describe('notifier', function(){

		var service,scope, props;

		beforeEach(inject(function($injector, $rootScope, notifierService){
			service = notifierService;
			scope = $rootScope;
			props = {
				level:"alert",
				duration: 1223,
				text:"tada"
			};
		}));

		// Test broadcast
		it('should send out broadcast', function(){
			
			var fun = scope.$on("notify.newNotification", function(event, data){
				expect(data.text === 'tada');
			});

			service.sendNotification(props);
		});

	})
})