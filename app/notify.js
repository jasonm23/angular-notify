angular.module('notifier.services', [])

  .factory('notifierService', ['$rootScope', function ($scope) {
    var notifyImpl = {};
    notifyImpl.notifications = [];

    // Send out a notification to the system.
    notifyImpl.sendNotification = function (props) {
      $scope.$broadcast("notify.newNotification", props);
      notifyImpl.notifications.push(props);
    };

    notifyImpl.getNotifications = function () {
      return notifyImpl.notifications;
    };
  
    notifyImpl.removeNotification = function (index) {
      if( (notifyImpl.notifications.length - 1) >= index){
        notifyImpl.notifications.splice(index, 1);
      }
    };

    return notifyImpl;
  }]);

  angular.module('notifier.directives', [])
  .directive('notify', ['$timeout', function ($timeout) {

    return {
      //	transclude:'element',
      replace:false, 
      restrict:'A',
      //	template:
      //		'<div id="notifier-container"> '+
      //		' <div ng-transclude></div>' +
      //		'</div>',
      link: function (scope, iElement, iAttrs, controller) { 

        var ele = $(iElement),
        extra_class = "",
        duration = 1000,
        timeout = null;

        // Default: make sure the element is hidden.
        ele.css("display", "none");

        function showAlert(){
          if(ele.css("display") === "none"){
            ele.slideDown("slow");
          }
          timeout = $timeout(function(){hideAlert();}, duration);
        }

        function hideAlert() {
          ele.slideUp("slow");
        }

        // Listen to the broadcast the service sends out.
        scope.$on("notify.newNotification", function (event, props) {

          if( timeout !== null ){
            $timeout.cancel(timeout);
          }

          // Remove the old applied class.
          ele.removeClass(extra_class);

          extra_class = props.level;
          duration = props.duration;

          ele.html(props.text);
          ele.addClass(extra_class);

          showAlert();
        });
      }
    };
  }
]);