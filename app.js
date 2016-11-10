// this is a simple app that has serveral mathematical functions

function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

function calculator(a,b,cb) {
	return cb(a,b);
}

function noop(){};

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	calculator
}