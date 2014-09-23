angular.module('UserCtrl', []).controller('UserController', function($scope, User) {

	
	// $scope.users
	User.get().success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});

	$scope.submit = function() {
		var formData = {
			'username' : $scope.newUsername,
			'password' : $scope.newPassword
		}
		User.create(formData);
	}

});
