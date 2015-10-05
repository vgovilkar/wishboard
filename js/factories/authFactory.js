app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);
