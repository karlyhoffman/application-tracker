angular.module('jobTrackerApp')
  .controller('addCtrl', function($scope, $location, $http) {

  	$scope.addJobApp = function(submitDate, jobTitle, company, jobDescLink, interviewerNameAndTitle, interviewerContact, interviewerNotes, followUpEmail) {
  		 $http({
	        url: 'http://localhost:3000/jobs',
	        method: "POST",
	        data: { submitDate: submitDate, jobTitle: jobTitle, company: company, jobDescLink: jobDescLink, interviewerNameAndTitle: interviewerNameAndTitle, interviewerContact: interviewerContact, interviewerNotes: interviewerNotes, followUpEmail: followUpEmail} 
	    })
	    .then(function(response) {
	    	console.log(response);
	    	$scope.homePage();
	    }, 
	    function(response) {
	    	console.log(response);
	    });
	};

  	$scope.homePage = function() {
		$location.path('/');
	};

});

