var app = angular
  .module("myApp", ["firebase", "ngRoute", "xeditable"])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
      })
      .when('/main', {
        templateUrl: 'views/mainview.html',
        controller: 'MainController',
      })
      .otherwise({ redirectTo: '/login' });;

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }])
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; 
  });
