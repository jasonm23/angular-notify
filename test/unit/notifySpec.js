'use strict';


describe('notify directives', function() {

	var scope, ctrl;

	beforeEach(module('notify')); 


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