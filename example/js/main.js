requirejs.config({
	baseUrl: '../app',
	paths:{
		angular:'../app/lib/angular',
		jquery:'../app/lib/jquery'
	}
});

requirejs(['notify'],
	function(notify){
		var app = notify;
	}
);