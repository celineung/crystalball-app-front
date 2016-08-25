'use strict';

module.exports = [
  '$http',
  function ($http) {
    var factory = {};

    factory.isCorrectFileFormat = function(fileName) {
      var tabFileNameSplit = fileName.split(".");

      if(tabFileNameSplit.length < 2 || tabFileNameSplit[tabFileNameSplit.length-1]!="bpmn") {
        return false;
      }
      return true;
    }

    factory.sendFile = function(fileName, fileData) {
    	return $http({
        method: 'POST',
        url: 'file/upload-file',
        headers: { "Content-Type": 'application/x-www-form-urlencoded' },
        data: {
    		  fileName : fileName,
          upload : fileData
        }
    	});

    	//return $http.get("/mock_resources/file/upload-file.json");
    };

    factory.getProcesses = function() {
    	return $http.get("/mock_resources/file/upload-file.json");
    };

    return factory;
	}
]