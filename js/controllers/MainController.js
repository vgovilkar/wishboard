app.controller("MainController", ["$scope", "$rootScope",'Dashboards',
function($scope, $rootScope, Dashboards) {
  var dashboards = Dashboards($rootScope.authData.uid);
  $scope.dashBoardNames = [];
  dashboards.$loaded().then(function(dashboards) {
    angular.forEach(dashboards, function(value, key) {
      $scope.dashBoardNames.push(value.$value);
    });
  });
}
])
