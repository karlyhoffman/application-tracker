angular.module('jobTrackerApp')
  .controller('mainCtrl', function($scope, $http) {
  // $http.get, $http.post, $http.delete, $http.put

  // $scope.api = '/jobs'; // url to an api!

  // $scope.fetch = function() {
  //   $http.get($scope.api).success(function(data) {
  //     console.log('omg guysssss i gots ze data');
  //     console.log(data);
  //     $scope.jobs = data;
  //   });
  // }

  // // $scope.create = function(name, planet) {
  // //   // args: url, dataObject
  // //   $http.post($scope.api, { name: name, planet: planet} ).success(function(data, status) {
  // //     $scope.fetch();
  // //   });
  // // }

  // // $scope.delete = function(character) {
  // //   console.log(character);
  // //   var confirmDelete = confirm('Are you sure you want to delete ' + character['name'] + '?');
  // //   if (confirmDelete == true) {
  // //     // '/characters/913283091-12312-123-123-123'
  // //     $http.delete($scope.api + '/' + character['_id']);
  // //     $scope.fetch();
  // //   }
  // // }

  // $scope.fetch();

});



