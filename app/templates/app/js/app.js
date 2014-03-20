(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>', [
			'ngResource',
			'<%= _.slugify(_.humanize(projectName)) %>.controllers',
			'<%= _.slugify(_.humanize(projectName)) %>.directives',
			'<%= _.slugify(_.humanize(projectName)) %>.filters',
			'<%= _.slugify(_.humanize(projectName)) %>.services',
			<% if (useUiRouter) { %>
			'ui.router'
			<% } else { %>
			'ngRoute'
			<% } %>
		])
		.config([
		<% if (useUiRouter) { %>
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: '/templates/home/home.html'
					})
					.state('readme', {
						url: '/readme',
						templateUrl: '/templates/readme/readme.html'
					});

				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		<% } else { %>
			'$routeProvider',
			'$locationProvider',
			function ($routeProvider, $locationProvider) {
				$routeProvider
					.when('/', {
						templateUrl: '/templates/home/home.html'
					})
					.when('/readme', {
						templateUrl: '/templates/readme/readme.html'
					})
					.otherwise({
						redirectTo: '/'
					});

				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		<% } %>
		]);
})();