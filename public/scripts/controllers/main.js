angular.module('jobTrackerApp')
  .controller('mainCtrl', function($scope, $http, $location, dataService) {

  	$scope.jobs = [];

    dataService.getJobs(function(res) {
      $scope.jobs = res.data;
    });

    $scope.addPage = function() {
		$location.path('/new');
	}
});