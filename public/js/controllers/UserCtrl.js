angular.module('UserCtrl', []).controller('UserController', function($scope, User) {

	$scope.submit = function() {
		var formData = {
			'username' : $scope.newUsername,
			'password' : $scope.newPassword
		}
		User.create(formData);
	}

});
