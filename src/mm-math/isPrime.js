'use strict';

var primeNumbers = {};

/**
 * Return whether a specified number is prime or not.
 * @returns {Boolean} true is number is prime.
 * @name module:mm-math.isPrime
 * @kind function
 */
module.exports = function isPrime (num) {

	if (typeof num !== 'number') {
		throw new Error('Not a number');
	}
	else if (num <= 1) {
		// a prime number must be greater than 1
		return false;
	}
	else if (primeNumbers[num] !== undefined) {
		return primeNumbers[num];
	}

	primeNumbers[num] = function () {
		if (num === 2) {
			return true;
		}
		else if (num % 2 === 0) {
			return false;
		}

		for (var i = 3; i < num; i += 2) {
			if (num % i === 0) {
				return false;
			}
		}

		return true;
	}();

	return primeNumbers[num];
};
