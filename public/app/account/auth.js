alt.factory('altAuth', function($http, altIdentity, $q, altUser) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
          var user = new altUser();
          angular.extend(user, response.data.user);
          altIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    createUser: function(newUserData) {
      var newUser = new altUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        altIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },
    updateCurrentUser: function(newUserData) {
      var dfd = $q.defer();
      console.log(newUserData);

      var clone = angular.copy(altIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        altIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        altIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(altIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }

    }
  }
});