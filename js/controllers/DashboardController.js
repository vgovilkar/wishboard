
app.controller('DashboardController', ['$scope', '$rootScope', '$attrs',
                                'Lists', 'Elements', 'DashboardObject',
    function($scope, $rootScope, $attrs, Lists, Elements, DashboardObject) {
      DashboardObject($scope.dashboardid).$bindTo($scope,"dashboardObject");
      $scope.lists = Lists($scope.dashboardid);
      $scope.elementsBind = [];
      $scope.lists.$loaded().then(function(lists) {
        angular.forEach($scope.lists, function(value, key) {
          $scope.elementsBind.push(Elements($scope.dashboardid, value.$id));
        });
      });


      $scope.addItem = function(index) {
        var list = $scope.lists[index];
        if (list.textToAdd) {
          $scope.elementsBind[index].$add(list.textToAdd);
        }
      };

      $scope.deleteItem = function(listsIndex, elementsIndex) {
        $scope.elementsBind[listsIndex].$remove(elementsIndex);
      };

      $scope.addList = function() {
        var listObject = {};
        if($scope.newListTextAdd) {
          listObject["name"] = $scope.newListTextAdd;
        }
        $scope.lists.$add(listObject).then(function(ref) {
          $scope.elementsBind.push(Elements($scope.dashboardid, ref.key()));
          $scope.newListTextAdd = "";
        });
      };

      $scope.removeList = function(listIndex) {
        $scope.lists.$remove(listIndex);
        $scope.elementsBind.splice(listIndex,1);
      };
    }]
)
