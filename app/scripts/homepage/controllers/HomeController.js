
'use strict';

module.exports = [
	'fileUploadService',
	function HomeController(fileUploadService) {
		
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
