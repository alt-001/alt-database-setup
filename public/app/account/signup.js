alt.controller('signupCtrl', function($scope, $location, $window, altAuth, toaster) {
	$scope.signup = function() {
		var newUserData = {
			username: $scope.username,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname,
			gender: $scope.gender
		};

		altAuth.createUser(newUserData).then(function() {
			toaster.pop('success', 'Successfully signed up!');
			$location.path('/');
		}, function(reason) {
			toaster.pop('error', reason);
		});
	}
});