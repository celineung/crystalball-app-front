
'use strict';

module.exports = ['$rootScope','$parse', function ($rootScope, $parse) {
	return {
    restrict: 'A',
    scope: false,
    controller: FileUploadController,
    controllerAs: 'fileUploadController',
    link: function (scope, element, attrs, controller) {
    	
      element.bind('change', function(e) {
        controller.fileName = element[0].files[0].name;
        $rootScope.$broadcast("read-file", element[0].files[0]);
        scope.$apply();
      });
    }
  };
}];

FileUploadController.$inject = ['$rootScope', '$scope'];
function FileUploadController($rootScope, $scope) {
	
	var fileUploadController = this;
	
}