alt.controller('loginCtrl', function($scope, $http, $location, $route, $window, altIdentity, altAuth, toaster) {
  $scope.identity = altIdentity;
  $scope.gender = $scope.identity.gender;
  console.log($scope.identity);
  $scope.signin = function(username, password) {
    console.log(username);
    altAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        toaster.pop('success', 'Successfully signed in!');
      } else {
        toaster.pop('error', 'Username/Password combination incorrect.');
      }
    });
  }

  $scope.signout = function() {
    altAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      toaster.pop('success', 'Successfully signed out!');
      $route.reload();
    })
  }

  $scope.isSignup = function() {
    var currentRoute = $location.path().split('/');
    return currentRoute[1] === 'signup' ? 'true' : 'false';
  }
  
});