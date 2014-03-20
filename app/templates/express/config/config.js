(function () {
	'use strict';

	var path = require('path'),
		rootPath = path.normalize(__dirname + '/../..'),
		env = process.env.NODE_ENV || 'development';

	var config = {
		development: {
			root: rootPath,
			app: {
				name: '<%= _.slugify(_.humanize(projectName)) %>',
				path: '/'
			},
			port: <%= expressPort %>,
			protocol: '<%= expressProtocol %>',
			server: '<%= expressServer %>'
		},

		test: {
			root: rootPath,
			app: {
				name: '<%= _.slugify(_.humanize(projectName)) %>',
				path: '/'
			},
			port: <%= expressPort %>,
			protocol: '<%= expressProtocol %>',
			server: '<%= expressServer %>'
		},

		production: {
			root: rootPath,
			app: {
				name: '<%= _.slugify(_.humanize(projectName)) %>',
				path: '/'
			},
			port: <%= expressPort %>,
			protocol: '<%= expressProtocol %>',
			server: '<%= expressServer %>'
		}
	};

	module.exports = config[env];
})();