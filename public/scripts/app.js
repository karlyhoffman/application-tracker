console.log('Linked');
// [require('angular-route')]

angular.module('jobTrackerApp', ['ngRoute', 'ngMaterial']).config([
  '$locationProvider',
  '$routeProvider',
  '$mdThemingProvider',
  function($locationProvider, $routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('orange')

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