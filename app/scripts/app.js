(function () {	
	'use strict';

	if (module.hot) {
		module.hot.accept(function() {});
		module.hot.dispose(function() {});
	}

	require('font-awesome/css/font-awesome.css');
	require('./../styles/app.scss');

	require('./topNavigation/styles/navigation.scss');

	require('./homepage/homepage');
	require('./processDetail/processDetail');
	require('./runProcess/runProcess');

	require('./topNavigation/directives/navigationDirective');

	require('./config/appConstants');

	angular.module("NgAppProject", [
		'ngRoute',
		'ng',
		'ngAnimate',
		'Homepage',
		'ProcessDetail',
		'RunProcess',
		'AppConstants'
	])
	.directive('topNavigationDirective', require('./topNavigation/directives/navigationDirective'));
})();