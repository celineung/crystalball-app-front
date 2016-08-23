(function () {
	'use strict';

	require('./styles/homepage.scss');
	
	require('./views/homepage.html');	
	require('./views/chooseFile.html');
	
	var homeController = require('./controllers/HomeController');
	var chooseFileDirective = require('./directives/chooseFileDirective');
	var fileUploadDirective = require('./directives/fileUploadDirective');
	var fileUploadService = require('./services/uploadFileService');

	angular.module('Homepage', [
		'ngRoute',
		'ng'
		])
		.config([
				'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$injector',
				function($controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
					angular.module('Homepage').register = {
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
					.when('/', {
						templateUrl: 'scripts/homepage/views/homepage.html',
						controller: 'HomeController',
						controllerAs: 'homeController',
						resolve: {
							deps: function() {
								return require.ensure([], function (require) {
									angular.module('Homepage').register.controller("HomeController", homeController);
									angular.module('Homepage').register.directive("chooseFileDirective", chooseFileDirective);
									angular.module('Homepage').register.directive("fileUploadDirective", fileUploadDirective);
									angular.module('Homepage').register.factory("fileUploadService", fileUploadService);
								}, '_homepage');
							}
						}
					});
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();