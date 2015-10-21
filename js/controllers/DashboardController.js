
app.controller('DashboardController', ['$scope', '$rootScope', '$attrs',
                                'Lists', 'Elements',
    function($scope, $rootScope, $attrs, Lists, Elements) {
      
      $scope.lists = Lists($scope.dashboardname);
      $scope.elementsBind = [];
      $scope.lists.$loaded().then(function(lists) {
        angular.forEach($scope.lists, function(value, key) {
          $scope.elementsBind.push(Elements($scope.dashboardname, key));
        });
      });


      $scope.addItem = function(index) {
        var list = $scope.lists[index];
        if (list.textToAdd && (!list.hasOwnProperty('element')
        || list.elements.indexOf(list.textToAdd) == -1)) {
          $scope.elementsBind[index].$add(list.textToAdd);
        }
      };

      $scope.deleteItem = function(listsIndex, elementsIndex) {
        $scope.elementsBind[listsIndex].$remove(elementsIndex);
      };

      $scope.addList = function() {
        var listObject = {};
        if($scope.lists.indexOf($scope.newListTextAdd) == -1) {
          listObject["name"] = $scope.newListTextAdd;
        }
        $scope.lists.$add(listObject).then(function(ref) {
          $scope.elementsBind.push(Elements("lists", ref.key()));
        });
      };

      $scope.removeList = function(listIndex) {
        $scope.lists.$remove(listIndex);
        $scope.elementsBind.splice(listIndex,1);
      };

    }]
)
