'use strict';

module.exports = [
  '$http',
  function ($http) {
    var factory = {};

    factory.sendFile = function(fileName, fileData) {
    	/*return $http({
        method: 'POST',
        url: 'file/upload-file',
        headers: { "Content-Type": 'application/x-www-form-urlencoded' },
        data: {
        		fileName : fileName,
            upload : fileData
        }
    	});*/

    	return $http.get("/mock_resources/file/upload-file.json");
    };

    factory.getProcesses = function() {
    	return $http.get("/mock_resources/file/upload-file.json");
    };

    return factory;
	}
]