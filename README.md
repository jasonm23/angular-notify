Angular Notifier
==============

Right now, a simple pop-up system designed to help notify users when certian actions have occured.

### Usage

There are two parts of the sytem, the first is the directive. With in your controller:
```html
    <div notifier></div>
```


Then, to notify a user you use the ntofierService:
    
```javascript
notify.sendNotification({
	level:$scope.extra_class.name,
	text:$scope.text,
	duration:$scope.duration	
});
```

Where:

* `level` is the level of the error.  Right now, it is just the extra class that is appened to the notifier element.
* `text` is the text to display.
* `duration` is how long to display the info.