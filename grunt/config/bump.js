(function () {
	'use strict';

	module.exports = {
		options: {
			files: ['package.json'],
			updateConfigs: ['pkg'],
			commit: true,
			commitFiles: ['-a'],
			createTag: true,
			push: true,
			pushTo: 'origin'
		}
	};
})();