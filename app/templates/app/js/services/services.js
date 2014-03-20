(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.services', [
		'<%= _.slugify(_.humanize(projectName)) %>.services.readme'
	]);
})();