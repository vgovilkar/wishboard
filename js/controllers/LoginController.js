app.controller("LoginController", ["$scope", "$rootScope", "Auth", "$location",
  function($scope, $rootScope, Auth, $location) {
    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData) {
      $rootScope.authData = authData;
      if ($rootScope.authData) {
        $location.path('/main');
      } else {
        $location.path('/login');
      }
    });
  }
]);
