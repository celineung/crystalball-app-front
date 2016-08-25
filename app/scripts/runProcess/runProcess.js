(function () {
	'use strict';

	require('./styles/runProcess.scss');
	
	require('./views/runProcess.html');	
	
	var playProcessController = require('./controllers/runProcessController');

	angular.module('RunProcess', [
		'ngRoute',
		'ng'
		])
		.config([
				'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$injector',
				function($controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
					angular.module('RunProcess').register = {
						controller: function(name, content) {
							return $controllerProvider.register(name, content);
						},
						directive: function(name, content) {
							if(!$injector.has(name + 'Directive')) {
								return $compileProvider.directive(name, content);
							}
						},
						filter: function(name, content) {
							return $filterProvider.register(name, content);
						},
						factory: function(name, content) {
							return $provide.factory(name, content);
						},
						service: function(name, content) {
							return $provide.service(name, content);
						}
					};
				}
			])
		.config(['$routeProvider', function($routeProvider) {
				$routeProvider
					.when('/runprocess/:idProcess', {
						templateUrl: 'scripts/runProcess/views/runProcess.html',
						controller: 'runProcessController',
						controllerAs: 'runProcessController',
						resolve: {
							deps: function() {
								return require.ensure([], function (require) {
									angular.module('RunProcess').register.controller("runProcessController", playProcessController);
								}, '_processDetail');
							}
						}
					});
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();