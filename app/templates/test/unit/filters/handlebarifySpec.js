(function () {
	'use strict';

	describe('Handlebarify filter', function () {
		var $filter,
			filter;

		beforeEach(module('<%= _.slugify(_.humanize(projectName)) %>.filters.handlebarify'));

		beforeEach(inject(function (_$filter_) {
			$filter = _$filter_;

			filter = $filter('handlebarify');
		}));

		it('should be a function', function () {
			expect(filter).to.be.a('function');
		});

		it('should surround input with spaces and handlebars', function () {
			var input = 'foobar',
				expOutput = '{{ ' + input + ' }}';

			expect(filter(input)).to.equal(expOutput);
		});
	});
})();