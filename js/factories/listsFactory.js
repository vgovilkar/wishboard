app.factory("Dashboards", ["$firebaseArray", function($firebaseArray) {
    return function(authData) {
      var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
      var dashboardListRef = ref.child("Users").child(authData.uid);
      dashboardListRef.once("value", function(snapshot) {
        var a = snapshot.exists();
        if (a==false) {
          createNewUserData(authData, ref, dashboardListRef);
        }
      })
      return $firebaseArray(dashboardListRef);
    }
}]);

app.factory("DashboardObject", ["$firebaseObject", function($firebaseObject) {
  return function(dashboard_id) {
      var ref = new Firebase("https://dazzling-torch-2985.firebaseio.com/");
      var ref = ref.child(dashboard_id);
      // return it as a synchronized object
      return $firebaseObject(ref);
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

function createNewUserData(authData, baseRef, dashboardListRef ) {
  var dblist = {};
  dblist["0"] = "D" + authData.uid;
  dashboardListRef.set(dblist);

  dbobj = {};
  dbobj["dName"] = "Sample Pinboard";
  console.log(authData.facebook.displayName );
  dbobj[authData.uid] = authData.facebook.displayName;
  dbobj["lists"] = {
    "0" : {
      "elements" : {
        "0" : "McMagic",
        "1" : "Amazing Pizza Place"
      },
      "name" : "Restaurants"
    },
    "1" : {
      "elements" : {
        "0" : "Yosimitte",
        "1" : "Yellowstone"
      },
      "name" : "Hikes"
    }
  };

  dashboardRef = baseRef.child(dblist["0"]);
  dashboardRef.set(dbobj);
}
