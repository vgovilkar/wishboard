app.controller("LoginController", ["$scope", "$location", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      $location.path('/main')
    });
  }
]);
