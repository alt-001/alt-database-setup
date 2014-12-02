alt.factory('altIdentity', function($window, altUser) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new altUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
})