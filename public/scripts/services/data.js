'use strict';
angular.module('jobTrackerApp')
.service('dataService', function($http) {
	this.getJobs = function(callback) {
		$http.get('../jobs')
		.then(callback)
	};
});