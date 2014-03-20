(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.controllers', [
		'<%= _.slugify(_.humanize(projectName)) %>.controllers.byteCount',
		'<%= _.slugify(_.humanize(projectName)) %>.controllers.home',
		'<%= _.slugify(_.humanize(projectName)) %>.controllers.readme'
	]);
})();