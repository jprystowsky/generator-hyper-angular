(function () {
	'use strict';

	var util = require('util');
	var path = require('path');
	var yeoman = require('yeoman-generator');
	var chalk = require('chalk'),
		messages = require('./config/messages'),
		_ = require('lodash-node');

	// Make errors wordier
	require('longjohn');

	var HyperAngularGenerator = yeoman.generators.Base.extend({
		init: function () {
			this.pkg = require('../package.json');

			this.on('end', function () {
				if (!this.options['skip-install']) {
					this.installDependencies();
				}

				messages.outro(this);
			});

			messages.intro(this);
		},

		askForProject: function () {
			var cb = this.async();

			this.prompt({
					type: 'text',
					name: 'projectName',
					message: 'What will your project be named?',
					default: 'HyperAngular Project'
				},
				function (props) {
					this.projectName = props.projectName;
					this.projectNameQuoteEscaped = this.projectName.replace(/'/gi, '\\\'');
					this.projectNameDoubleQuoteEscaped = this.projectName.replace(/"/gi, '\\\"');
					cb();
				}.bind(this));
		},

		askForUiRouter: function () {
			var cb = this.async();

			this.prompt({
					type: 'confirm',
					name: 'useUiRouter',
					message: 'Use AngularUI state-based Router instead of AngularJS path-based Router?',
					default: true
				},
				function (props) {
					this.useUiRouter = props.useUiRouter;
					cb();
				}.bind(this));
		},

		askForProtocol: function () {
			var cb = this.async();

			this.prompt({
				type: 'text',
				name: 'expressProtocol',
				message: 'What protocol will your app use?',
				default: 'http'
			},
			function (props) {
				this.expressProtocol = props.expressProtocol;
				cb();
			}.bind(this));
		},

		askForServer: function () {
			var cb = this.async();

			this.prompt({
					type: 'text',
					name: 'expressServer',
					message: 'What server will the app run on?',
					default: 'localhost'
				},
				function (props) {
					this.expressServer = props.expressServer;
					cb();
				}.bind(this));
		},

		askForPort: function () {
			var cb = this.async();

			this.prompt({
					type: 'text',
					name: 'expressPort',
					message: 'What port will the server use?',
					default: '3000'
				},
				function (props) {
					this.expressPort = props.expressPort;
					cb();
				}.bind(this));
		},

		askForGithubUsername: function () {
			var cb = this.async();

			this.prompt({
				type: 'text',
				name: 'githubUsername',
				message: 'What\'s your GitHub username?'
			},
			function (props) {
				this.githubUsername = props.githubUsername;
				cb();
			}.bind(this));
		},

		askForLicense: function () {
			var cb = this.async();

			this.prompt({
					type: 'text',
					name: 'license',
					message: 'What license will you use?',
					default: 'MIT'
				},
				function (props) {
					this.license = props.license;
					cb();
				}.bind(this));
		},

		app: function () {
			this.directory('app');
		},

		express: function () {
			this.directory('express');
		},

		grunt: function () {
			this.directory('grunt');
		},

		test: function () {
			this.directory('test');
		},

		projectFiles: function () {
			this.template('_editorconfig', '.editorconfig');
			this.template('_jshintrc', '.jshintrc');

			this.template('_package.json', 'package.json');
			this.template('_bower.json', 'bower.json');

			this.template('_bowerrc', '.bowerrc');

			this.template('_Gruntfile.js', 'Gruntfile.js');

			this.template('_travis.yml', '.travis.yml');

			this.template('app.js', 'app.js');

			this.template('README.md', 'README.md');
		}
	});

	module.exports = HyperAngularGenerator;
})();