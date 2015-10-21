app.directive('dashboard', function() {
  return {
    restrict: 'E',
    scope: {
      dashboardname: '='
    },
    controller: 'DashboardController',
    templateUrl: 'js/directives/dashboard.html'
  };
});
