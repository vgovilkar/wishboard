app.controller("MainController", ["$scope", "$rootScope",'Dashboards',
function($scope, $rootScope, Dashboards) {
  var dashboards = Dashboards($rootScope.authData);
  console.log(dashboards);
  $scope.dashBoardIds = [];
  dashboards.$loaded().then(function(dashboards) {
    angular.forEach(dashboards, function(value, key) {
      $scope.dashBoardIds.push(value.$value);
    });
  });
}
])
