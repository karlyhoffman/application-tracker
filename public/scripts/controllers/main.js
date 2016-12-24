angular.module('jobTrackerApp')
 .controller('mainCtrl', function($scope, $http, $location, dataService) {

  	$scope.jobs = [];

  	$scope.fetch = function() {
	    dataService.getJobs(function(res) {
			for (var i = 0; i < res.data.length; i++) {
				$scope.jobs.push(res.data[i]);
			}
	    });
	};

    $scope.delete = function(object) {
	    $http({
	        url: 'http://localhost:3000/jobs/' + object._id,
	        method: 'DELETE',
	    }).then(function(res) {
	        console.log(res.data.message);
	        $scope.jobs = [];
	        $scope.fetch(); 
	    }, function(error) {
	        console.log(error);
	    });
	};

	$scope.save = function(object) {
	    $http({
	        url: 'http://localhost:3000/jobs/' + object._id,
	        method: 'PUT',
	        data: { submitDate: object.submitDate, jobTitle: object.jobTitle, company: object.company, jobDescLink: object.jobDescLink, interviewerNameAndTitle: object.interviewerNameAndTitle, interviewerContact: object.interviewerContact, interviewerNotes: object.interviewerNotes, followUpEmail: object.followUpEmail} 
	    }).then(function(res) {
	    	console.log(res);
	    }, function(error) {
	        console.log(error);
	    });
	};

    $scope.addPage = function() {
		$location.path('/new');
	};

	$scope.fetch();
});