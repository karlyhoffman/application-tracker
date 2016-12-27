angular.module('jobTrackerApp')
 .controller('mainCtrl', function($scope, $http, $location, dataService) {

  	$scope.jobs = [];

  	$scope.fetch = ()=> {
	    dataService.getJobs((res)=> {
			for (var i = 0; i < res.data.length; i++) {
				$scope.jobs.push(res.data[i]);
			}
	    });
	};

    $scope.delete = (object)=> {
	    $http({
	        url: 'http://localhost:3000/jobs/' + object._id,
	        method: 'DELETE',
	    }).then((res)=> {
	        console.log(res.data.message);
	        $scope.jobs = [];
	        $scope.fetch(); 
	    }, (error)=> {
	        console.log(error);
	    });
	};

	$scope.save = (object)=> {
	    $http({
	        url: 'http://localhost:3000/jobs/' + object._id,
	        method: 'PUT',
	        data: { submitDate: object.submitDate, jobTitle: object.jobTitle, company: object.company, jobDescLink: object.jobDescLink, interviewerNameAndTitle: object.interviewerNameAndTitle, interviewerContact: object.interviewerContact, interviewerNotes: object.interviewerNotes, followUpEmail: object.followUpEmail} 
	    }).then((res)=> {
	    	console.log(res);
	    }, (error)=> {
	        console.log(error);
	    });
	};

    $scope.addPage = ()=> {
		$location.path('/new');
	};

	$scope.fetch();
});