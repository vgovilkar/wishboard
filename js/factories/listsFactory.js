app.factory("Dashboards", ["$firebaseArray", function($firebaseArray) {
    return function(user_id) {
      var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
      var dashboardListRef = ref.child("Users").child(user_id);
      return $firebaseArray(dashboardListRef);
    }
}]);

app.factory("Lists", ["$firebaseArray", function($firebaseArray) {
  return function(dashboard_id) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    var listsRef = ref.child(dashboard_id).child("lists");
    return $firebaseArray(listsRef);
  }
}]);

app.factory("Elements", ["$firebaseArray", function($firebaseArray) {
  return function(dashboard_id, id) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    var listsRef = ref.child(dashboard_id).child("lists").child(id).child("elements");
    return $firebaseArray(listsRef);
  }
}]);
