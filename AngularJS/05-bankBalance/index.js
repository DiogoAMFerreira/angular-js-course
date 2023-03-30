var app = angular.module("bankApp", []);

	app.controller("balanceController", function ($scope) {
		$scope.users = [
			{name: "Mitch Jones", balance: 43213}, 
			{name: 'Matthew', balance: 100332},
			{name: 'Zack', balance: 1200032}
		];
		$scope.addNew = function (user) {
			$scope.users.push(user)
		}
		$scope.delete = function (user) {
			var index = $scope.users.indexOf(user);
			alert("Deleting index:" + index);
			$scope.users.splice(index, 1);
		}
		$scope.edit = function (user) {
			$scope.current = user;
		}
		$scope.save = function (user) {
			$scope.current = {}
		}
	})

	//CRUD -CREATE, UPDATE, DELETE