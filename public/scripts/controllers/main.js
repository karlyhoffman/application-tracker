angular.module('jobTrackerApp')
  .controller('mainCtrl', function($scope, $http, dataService) {

    dataService.getJobs(function(res) {
      $scope.jobs = res.data;
    });

});



