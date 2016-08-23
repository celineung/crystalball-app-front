
'use strict';

var tpl = require('./../views/navigation.html');

module.exports = ['$location', function ($location) {
	return {
	    restrict: 'E',
	    templateUrl: tpl,
	    controller: NavigationController,
	    controllerAs: 'navigationController'
	}
}];

NavigationController.$inject = ['$scope', '$location', '$anchorScroll'];
function NavigationController($scope, $location, $anchorScroll) {
	var navigationController = this;
	navigationController.gotoInstructions = gotoInstructions;

	function gotoInstructions() {
    	$location.hash('instructions');
    	$anchorScroll();
  	}
}