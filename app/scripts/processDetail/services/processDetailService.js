'use strict';

module.exports = [
  '$http',
  function ($http) {
    var factory = {};

    factory.getProcessInfo = function(processId) {
      return $http.get("/mock_resources/processdetail/" + processId + ".json");
    };

    return factory;
	} 
];