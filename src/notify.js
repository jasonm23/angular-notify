angular.module('notifier.services', [])

  .factory('notifierService', ['$rootScope', function ($scope) {

    var notifyImpl = {};

    notifyImpl.notifications = [];


    // Send out a notification to the system.
    notifyImpl.sendNotification = function (props) {
      var nofication = {
        read: true,
        closed: false,
        text: props.text,
        level: props.level
      };

      $scope.$broadcast("notify.newNotification", props);
    }

    notifyImpl.getNotifications = function () {
      return notifyImpl.notifications;
    }

    notifyImpl.readNotification = function (index) {
      notifyImpl.notifications.read = true;
    }

    return notifyImpl;
    
  }]);
  

  angular.module('notifier.directives', [])
  .directive('notify', ['$timeout','notifierService', function ($timeout, notifier) {

    return {
      replace:false, 
      restrict:'A',
    
      link: function (scope, iElement, iAttrs, controller) {

        var ele = $(iElement),
                  extra_class = "",
                  duration = 1000,
                  timeout = null,
                  popups = [];

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

        ele.bind("onclick", showAlert);

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