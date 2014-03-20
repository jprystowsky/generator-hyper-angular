(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.services.readme', [])
		.service('readme', ['$http', function ($http) {
			return {
				get: function (success, error) {
					$http({
						method: 'GET',
						url: '/api/readme'
					})
						.success(success)
						.error(error);
				}
			};
		}]);
})();