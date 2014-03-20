(function () {
	'use strict';

	var chalk = require('chalk');

	module.exports = {
		intro: function (yeoman) {
			// have Yeoman greet the user
			yeoman.log(yeoman.yeoman);

			// replace it with a short and sweet description of your generator
			yeoman.log(chalk.yellow(chalk.bold('Hello!') + ' This is the ') + chalk.red('Hyper-Angular') + chalk.yellow(' generator speaking!\n'));

			yeoman.log(chalk.yellow('We\'re going to get you set up with a nice, clean project now.\n'))
		},
		outro: function (yeoman) {
			yeoman.log(chalk.bold(chalk.yellow('Nice work!')));
			yeoman.log(chalk.yellow('Now check out the README.md to get familiar with your new environment.'));
			yeoman.log(chalk.bold(chalk.red('Yippee ki yay!\n')));
		}
	};
})();