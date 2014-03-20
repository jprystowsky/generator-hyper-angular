(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.directives.header', [])
		.directive('header', function () {
			return {
				templateUrl: '/templates/header/header.html'
			};
		});
})();