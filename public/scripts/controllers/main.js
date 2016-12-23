angular.module('jobTrackerApp')
 .controller('mainCtrl', function($scope, $http, $location, dataService) {

  	$scope.jobs = [];

  	$scope.fetch = function() {
	    dataService.getJobs(function(res) {
	    	$scope.jobs = res.data;
			for (var i = 0; i < $scope.jobs.length; i++) {
				// console.log(moment($scope.jobs[i].submitDate).format('MM-DD-YYYY'));
				// *Format Options: http://momentjs.com/
				$scope.jobs[i].submitDate = moment($scope.jobs[i].submitDate).format('dddd, MMM Do');
			}
	    });
	};

    $scope.delete = function(object) {
	    $http({
	        url: 'http://localhost:3000/jobs/' + object._id,
	        method: 'DELETE',
	    }).then(function(res) {
	        console.log(res.data.message);
	        $scope.fetch(); 
	    }, function(error) {
	        console.log(error);
	    });
	};

    $scope.addPage = function() {
		$location.path('/new');
	};

	$scope.fetch(); 
});