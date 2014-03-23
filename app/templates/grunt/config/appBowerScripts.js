(function () {
	'use strict';

	module.exports = {
		development: [
			<% if (useUiRouter) { %>
			'angular-ui-router/release/angular-ui-router.min.js',
			<% } %>
			'lodash/dist/lodash.compat.min.js',
			'moment/min/moment.min.js',
			'underscore.string/dist/underscore.string.min.js'
		],

		test: [
			<% if (useUiRouter) { %>
			'angular-ui-router/release/angular-ui-router.min.js',
			<% } %>
			'lodash/dist/lodash.compat.min.js',
			'moment/min/moment.min.js',
			'underscore.string/dist/underscore.string.min.js'
		],

		production: [
			<% if (useUiRouter) { %>
			'angular-ui-router/release/angular-ui-router.min.js',
			<% } %>
			'lodash/dist/lodash.compat.min.js',
			'moment/min/moment.min.js',
			'underscore.string/dist/underscore.string.min.js'
		]
	};
})();