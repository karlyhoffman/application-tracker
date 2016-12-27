'use strict';
angular.module('jobTrackerApp')
.service('dataService', function($http) {
	this.getJobs = (callback)=> {
		$http.get('../jobs')
		.then(callback)
	};
});