const cal = require('../app');
const Chai = require('chai');
const expect = Chai.expect;

describe('all functions should work', function () {
	it('should add a and b together', function () {
		expect(cal.add(1,2)).to.be.equal(3);
	});

	it('should subtract a and b', function () {
		expect(cal.subtract(2,3)).to.be.equal(-1);
	})

	it('should multiply a and b', function() {
		expect(cal.multiply(3,3)).to.be.equal(9);
	})

	it('should divide a and b', function() {
		expect(cal.divide(3,3)).to.be.equal(1);
	});

	it('should be able to use cal function', function() {
		expect(cal.calculator(3,3,cal.multiply)).to.be.equal(9);
	});
});