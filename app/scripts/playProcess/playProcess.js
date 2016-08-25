(function () {
	'use strict';

	require('./styles/playProcess.scss');
	
	require('./views/playProcess.html');	
	
	var playProcessController = require('./controllers/playProcessController');

	angular.module('PlayProcess', [
		'ngRoute',
		'ng'
		])
		.config([
				'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$injector',
				function($controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
					angular.module('PlayProcess').register = {
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
					.when('/playprocess/:idProcess', {
						templateUrl: 'scripts/playProcess/views/playProcess.html',
						controller: 'playProcessController',
						controllerAs: 'playProcessController',
						resolve: {
							deps: function() {
								return require.ensure([], function (require) {
									angular.module('ProcessDetail').register.controller("playProcessController", playProcessController);
								}, '_processDetail');
							}
						}
					});
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();