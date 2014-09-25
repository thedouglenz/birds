angular.module('CoupleService', []).factory('Couple', ['$http', function($http) {
	return {
		get : function() {
			return $http.get('/api/couples');
		},

		create : function(coupleData) {
			return $http.post('/api/couples', coupleData);
		},

		delete : function(id) {
			return $http.delete('/api/couples/' + id);
		},

		find : function(params) {
			return $http({
				url : '/api/couples',
				method : "GET",
				params : params
			});
		}
	}
}]);