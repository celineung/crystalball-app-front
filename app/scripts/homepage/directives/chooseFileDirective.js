
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

			$rootScope.$broadcast("read-file", files[0]);
			scope.$apply();
		});
	}

}];

ChooseFileController.$inject = ["$rootScope", "$scope", "$timeout", "fileUploadService", "AppConstants"];
function ChooseFileController($rootScope, $scope, $timeout, fileUploadService, appConstants) {
	var chooseFileController = this;
	chooseFileController.loadFileState = "";
	chooseFileController.loadFilePossibleStates = appConstants.loadFileErrors;
	chooseFileController.fileName = "";

	$scope.$on("read-file", function(event, file) {
		if(!fileUploadService.isCorrectFileFormat(file.name)) {
			loadFileState("incorrect_format");
			return;
		}
  	additionalFileData(file.name);

		var reader = new FileReader();
    reader.onload = function() {
	    var fileContents = reader.result;
	    sendUploadedFile(reader.result);
		};
		reader.readAsText(file);
	});

	function additionalFileData(fileName) {
		chooseFileController.fileName = fileName;
  };

 	function sendUploadedFile(contents) {
    fileUploadService.sendFile(chooseFileController.fileName, contents).then(function() {
  		loadFileState("success");
  	}, function() {
  		loadFileState("send_error");
  	});
  };

  function loadFileState(state) {
		chooseFileController.loadFileState = state;
		$timeout(function() {
			chooseFileController.loadFileState = "";
		}, 5000);
	};
}
