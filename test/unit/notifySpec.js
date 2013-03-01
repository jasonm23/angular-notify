'use strict';

describe('Angular Notifer', function () {

  //
  // DIRECTIVE TESTS
  //
  describe('Notifier Directives', function () {

    var scope, ctrl;

    beforeEach(module('notifier.directives'));

    describe('Notify', function () {

      it('should default to display none', function () {

        inject(function ($compile, $rootScope) {
          // Compile a simple dom example of what our 
          var element = $compile("<div notify></div>")($rootScope);
          expect(element.css("display")).toEqual("none");
        });
      });
    });
  });

  //
  // SERVICE TESTS
  //
  describe('Notifier Service', function () {

    var service, scope, props;

    beforeEach(module("notifier.services"));
    beforeEach(inject(function ($injector, $rootScope, notifierService) {
      service = notifierService;
      scope = $rootScope;
      props = {
        level:"alert",
        duration: 1223,
        text:"tada"
      };
    }));

    it('should start with zero notifications', function(){
      var empty = [];
      expect(service.getNotifications().length).toBe(0);
    });

    it('should send out broadcast', function () {
      var fun = scope.$on("notify.newNotification", function (event, data) {
        expect(data.text).toEqual('tada');
      });
      service.sendNotification(props); 
    });

    it('should add keep notifications', function(){
      service.sendNotification(props);
      expect(service.getNotifications().length).toBe(1);  
    });

    it('should remove a notification', function () {
      service.sendNotification(props);
      expect(service.getNotifications().length).toBe(1);  

      service.removeNotification(0);
      expect(service.getNotifications().length).toBe(0);
    });
  });
});