
"use strict";

var tpl = require("./../views/chooseFile.html");

module.exports = ["$rootScope", function ($rootScope) {
	return {
		restrict: "E",
		templateUrl: tpl,
		controller: ChooseFileController,
		controllerAs: "chooseFileController",
		link: ChooseFileLink
	};

	function ChooseFileLink(scope, elem) {

		elem.bind("dragover", function(evt) {
			evt.preventDefault();
		});

		elem.bind("drop", function(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();

	    var files = evt.dataTransfer.files;
	    var reader = new FileReader();

	    reader.onload = function() {
		    var fileContents = reader.result;
		    debugger;
		    $rootScope.$broadcast("send-uploaded-file", reader.result);
			};
			reader.readAsText(files[0]);
		});
	}

}];

ChooseFileController.$inject = ["$rootScope", "$scope", "$timeout", "fileUploadService"];
function ChooseFileController($rootScope, $scope, $timeout, fileUploadService) {
	var chooseFileController = this;
	chooseFileController.loadFileState = "";
	chooseFileController.fileName = "";

	$scope.$on("load-file-state", function(event, data) {
		chooseFileController.loadFileState = data;
		$timeout(function() {
			chooseFileController.loadFileState = "";
		}, 5000);
	});

	$scope.$on("additional-file-data", function(event, fileName) {
		chooseFileController.fileName = fileName;
  });

 	$scope.$on("send-uploaded-file", function(event, contents) {
		console.log(contents);
    fileUploadService.sendFile(chooseFileController.fileName, contents).then(function() {
    		$rootScope.$broadcast("load-file-state", "success");
    	}, function() {
    		$rootScope.$broadcast("load-file-state", "error");
    	});
  });
}
