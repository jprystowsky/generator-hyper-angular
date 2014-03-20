(function () {
	'use strict';

	angular.module('<%= _.slugify(_.humanize(projectName)) %>.controllers.readme', [])
		.controller('ReadMeCtrl', ['$scope', 'readme', '$sce', function ($scope, readme, $sce) {
			readme.get(function (data) {
				$scope.readme = $sce.trustAsHtml(data);
			});
		}]);
})();