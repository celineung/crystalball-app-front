
'use strict';

module.exports = [
	'$scope', 'fileUploadService',
	function HomeController($scope, fileUploadService) {
		
		var homeController = this;

		homeController.allProcesses = [];

		init();

		function init() {
			fileUploadService.getProcesses().then(function(response) {
				homeController.allProcesses = response.data.processes;
			});
		}
	}
];
