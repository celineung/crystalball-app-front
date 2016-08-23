
'use strict';

module.exports = ['$rootScope','$parse', function ($rootScope, $parse) {
	return {
    restrict: 'A',
    scope: false,
    controller: FileUploadController,
    controllerAs: 'fileUploadController',
    link: function (scope, element, attrs, controller) {
    	element.bind('change', function(e) {
      	var reader = new FileReader();
      	controller.fileName = element[0].files[0].name;
				$rootScope.$broadcast("additional-file-data", controller.fileName);

      	reader.onload = function() {
			    $rootScope.$broadcast("send-uploaded-file", reader.result);
				};
				reader.readAsText(element[0].files[0]);
      });
    }
  };
}];

FileUploadController.$inject = ['$rootScope', '$scope', 'fileUploadService'];
function FileUploadController($rootScope, $scope, fileUploadService) {
	
	var fileUploadController = this;
	
}