var app = angular.module("customDirective", []);
//Directives must be written in Camel case (Angular translates Camel case into snake case)
//ng-custom-test
app.directive("ngCustomTest", function () {
	return {
		template: "<strong>Hello</strong>"
	};
});
app.directive("ngCustomHover", function () {
	return {
		link: function (scope, element, attributes) {
			var originalColor = element.css("color");
			element
				.on("mouseenter", function () {
					element.css("color", element.attr("ng-custom-hover"));
				})
				.on("mouseleave", function () {
					element.css("color", originalColor);
				});
		}
	}
});