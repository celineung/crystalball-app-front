'use strict';

module.exports = [
  '$http',
  function ($http) {
    var factory = {};

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
    };

    return factory;
	}
]