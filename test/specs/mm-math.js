describe('mm-math', function () {
	'use strict';

	var mm_math = require('mm-math');

	it('exists', function () {
		expect(mm_math).toEqual(jasmine.any(Object));
		expect(mm_math.isPrime).toEqual(jasmine.any(Function));
	});
});
