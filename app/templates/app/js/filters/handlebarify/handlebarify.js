(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.filters.handlebarify', [])
		.filter('handlebarify', function () {
			return function (input) {
				return '{{ ' + input + ' }}';
			};
		});
})();