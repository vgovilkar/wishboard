app.directive('dashboard', function() {
  return {
    restrict: 'E',
    scope: {
      dashboardid: '@'
    },
    controller: 'DashboardController',
    templateUrl: 'js/directives/dashboard.html'
  };
});
