(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.directives.byteCount', [])
		.directive('byteCount', function () {
			return {
				transclude: true,
				templateUrl: '/templates/byteCount/byteCount.html',
				scope: {
					byteCount: '@'
				}
			};
		});
})();