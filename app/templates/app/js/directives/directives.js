(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.directives', [
		'<%= _.slugify(_.humanize(projectName)) %>.directives.byteCount',
		'<%= _.slugify(_.humanize(projectName)) %>.directives.footer',
		'<%= _.slugify(_.humanize(projectName)) %>.directives.header'
	]);
})();