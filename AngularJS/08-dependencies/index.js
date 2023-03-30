var app = angular.module("filterApp", []);

app.controller("httpController", function ($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/posts")
	.success(function(result) {
		$scope.posts = result;
	})

	$scope.handleChange = function (postingId) {
		$http.get("https://jsonplaceholder.typicode.com/comments?postId=" + postingId)
		.success(function(postComments) {
			$scope.comments = postComments;
		})
	}
});