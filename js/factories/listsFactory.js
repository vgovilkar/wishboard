app.factory("Lists", ["$firebaseArray", function($firebaseArray) {
  return function(username) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    var listsRef = ref.child("Dashboard").child(username);
    return $firebaseArray(listsRef);
  }
}]);

app.factory("Elements", ["$firebaseArray", function($firebaseArray) {
  return function(username, id) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    var listsRef = ref.child("Dashboard").child(username).child(id).child("elements");
    return $firebaseArray(listsRef);
  }
}]);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);
