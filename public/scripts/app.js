console.log('Linked');
// [require('angular-route')]

angular.module('jobTrackerApp', ['ngRoute']).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: './ngViews/home.html',
        controller: 'mainCtrl'
      })
      .when('/new', {
        templateUrl: './ngViews/new.html',
        controller: 'addCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);