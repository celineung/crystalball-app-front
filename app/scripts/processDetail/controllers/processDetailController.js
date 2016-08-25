
'use strict';

module.exports = [
	'$scope', '$routeParams', 'processDetailService',
	function ProcessDetailController($scope, $routeParams, processDetailService) {
		
		var processDetailController = this;
		processDetailController.info = {};

		init();

		function init() {
			processDetailService.getProcessInfo($routeParams.idProcess).then(function(response) {
				processDetailController.info = response.data;
			});
		}
	}
];
