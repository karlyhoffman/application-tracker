angular.module('jobTrackerApp')
  .controller('mainCtrl', function($scope, $http, $location, dataService) {

    dataService.getJobs(function(res) {
      $scope.jobs = res.data;
    });

    $scope.addPage = function() {
		$location.path('/new');
	}
});