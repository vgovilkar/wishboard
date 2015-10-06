app.controller("LoginController", ["$scope", "Auth", "$location",
  function($scope, Auth, $location) {
    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      $location.path('/main')
    });
  }
]);
