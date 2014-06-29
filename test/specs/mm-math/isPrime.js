describe('isPrime', function () {
	'use strict';

	var isPrime = require('mm-math').isPrime;
	var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
						73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
						157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
						239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
						331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419];

	it('exists', function () {
		expect(isPrime).toEqual(jasmine.any(Function));
	});

	it('should return true when a prime number is passed to it, otherwise returns false', function () {
		var i = 420;
		while (i--) {
			expect(primeNumbers.indexOf(i) > -1).toEqual(isPrime(i));
		}
		expect(isPrime(1)).toEqual(false);
		expect(isPrime(2)).toEqual(true);
		expect(isPrime(3)).toEqual(true);
		expect(isPrime(4)).toEqual(false);
		expect(isPrime(5)).toEqual(true);
		expect(isPrime(6)).toEqual(false);
		expect(isPrime(7)).toEqual(true);
		expect(isPrime(275)).toEqual(false);
		expect(isPrime(359)).toEqual(true);
	});

	it('should throw an error if a non number is passed to it', function () {
		expect(function () {
			isPrime('foo');
		}).toThrow('Not a number');

		expect(function () {
			isPrime({});
		}).toThrow('Not a number');

		expect(function () {
			isPrime([]);
		}).toThrow('Not a number');

		expect(function () {
			isPrime(300);
		}).not.toThrow('Not a number');

		expect(function () {
			isPrime('300');
		}).toThrow('Not a number');
	});
});
