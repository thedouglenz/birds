angular.module('UserCtrl', []).controller('UserController', function($scope, User) {

	
	// $scope.users
	User.get().success(function(data) {
		$scope.users = data;
	});

	$scope.submit = function() {
		var formData = {
			'username' : $scope.newUsername,
			'password' : $scope.newPassword
		};
		User.create(formData);
	}

	$scope.searchSubmit = function() {
		var formData = {
			email : $scope.searchEmail
		};
		User.find(formData).success(function(data) {
			$scope.findResult = data;
		});
	}

});
