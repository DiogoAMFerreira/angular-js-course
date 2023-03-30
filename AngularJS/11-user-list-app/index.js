var userListApp = angular.module("userListApp", []);

userListApp.controller("userListCont", function($scope, $http) {
	$http.get("http://jsonplaceholder.typicode.com/users")
		.success(function (result) {
			$scope.users = result;
		});
	$scope.currentUser = {
		name: 'Chad Champion',
		email: 'chad@champion.com',
		phone: '919919991',
		website: 'google.com'
	}
});
userListApp.directive("myCustomUser", function () {
	return {
		scope: {u : "=user", label: "@lbl"},
		template: "<strong>{{label}}{{u.name}}</strong><br>" +
		"{{u.email}}<br>" +
		"{{u.phone}}<br>" +
		"<a href=\"{{u.website}}\">{{u.website}}</a>"
	}
})