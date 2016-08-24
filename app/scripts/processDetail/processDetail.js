(function () {
	'use strict';

	require('./styles/processDetail.scss');
	
	require('./views/processDetail.html');	
	
	var processDetailController = require('./controllers/processDetailController');

	angular.module('ProcessDetail', [
		'ngRoute',
		'ng'
		])
		.config([
				'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$injector',
				function($controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
					angular.module('ProcessDetail').register = {
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
					.when('/processdetail', {
						templateUrl: 'scripts/processDetail/views/processDetail.html',
						controller: 'processDetailController',
						controllerAs: 'processDetailController',
						resolve: {
							deps: function() {
								return require.ensure([], function (require) {
									angular.module('ProcessDetail').register.controller("processDetailController", processDetailController);
								}, '_processDetail');
							}
						}
					});
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();