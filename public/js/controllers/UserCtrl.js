angular.module('UserCtrl', []).controller('UserController', function($scope, $window, User) {

	
	// $scope.users
	function getRefreshUsers() {
		User.get().success(function(data) {
			$scope.users = data;
		});
	}
	getRefreshUsers();

	$scope.submit = function() {
		var formData = {
			'fullname' : $scope.newName,
			'email' : $scope.newEmail,
			'password' : $scope.newPassword
		};
		User.create(formData);
		$scope.newUserForm.$setPristine();
	}


	$scope.searchComplete = false;
	$scope.searchSubmit = function() {
		var formData = {
			email : $scope.searchEmail
		};
		User.find(formData).success(function(data) {
			$scope.findResult = data;
			$scope.searchComplete = true;
		});
	}

	$scope.deleteUser = function(userId) {
		if($window.confirm("Are you sure?")) {
			User.delete(userId);
			getRefreshUsers();
		}
	}

});
