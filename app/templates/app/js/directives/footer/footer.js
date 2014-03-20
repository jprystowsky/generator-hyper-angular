(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.directives.footer', [])
		.directive('footer', function () {
			return {
				templateUrl: '/templates/footer/footer.html'
			};
		});
})();