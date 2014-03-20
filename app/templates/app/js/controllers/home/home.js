(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.controllers.home', [])
		.controller('HomeCtrl', ['$scope', function ($scope) {
			$scope.projectName = '<%= projectNameQuoteEscaped %>';
		}]);
})();