(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.filters', [
		'<%= _.slugify(_.humanize(projectName)) %>.filters.handlebarify'
	]);
})();