
(function () {
	'use strict';

angular
    .module('AppConstants',[])
    .constant('AppConstants', {
    	loadFileErrors :  {
    		success : { type: "success", message: "File uploaded successfully."},
    		incorrectFormat : { type: "incorrect_format", message: "Incorrect file."},
    		sendError : { type: "send_error", message: "An error occured. Please send file again."}
    	}
    });

})();