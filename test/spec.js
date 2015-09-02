// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var haversine = require('../index.js');


// ----- tests
// ---------------------------------------
describe('haversine', function() {

	it('should have correct earth radius', function() {
		expect(haversine.earthRadius).to.equal(6371000);
	});

	it('should get distance between two points', function() {
		expect(haversine.distance([40, 50], [40, 50])).to.equal(0);
		expect(haversine.distance([40, -70], [-70, 40])).to.be.closeTo(14890000, 5000);
		expect(haversine.distance([36.151829, -115.143296], [36.151465, -115.146284])).to.be.closeTo(300, 100);
	});

});

describe('toDecimal', function() {
	it('should convert degrees minutes seconds to decimal', function() {
		expect(haversine.toDecimal('40° N')).to.equal(40);
		expect(haversine.toDecimal('40.1° N')).to.equal(40.1);
		expect(haversine.toDecimal('40 20')).to.equal(40.333333333333336);
		expect(haversine.toDecimal('40 20 0')).to.equal(40.333333333333336);
		expect(haversine.toDecimal('40 20 50')).to.equal(40.34722222222222);
		expect(haversine.toDecimal('40 20 50N')).to.equal(40.34722222222222);
		expect(haversine.toDecimal('40 20 50W')).to.equal(-40.34722222222222);
		expect(haversine.toDecimal('40°20\'50" S')).to.equal(-40.34722222222222);
	});
});

describe('degrees to radians', function() {
	it('should convert degrees to radians', function() {
		expect(haversine.degToRad(0)).to.equal(0);
		expect(haversine.degToRad(15)).to.equal(Math.PI / 12);
		expect(haversine.degToRad(180)).to.equal(Math.PI);
		expect(haversine.degToRad(360)).to.equal(Math.PI * 2);
	});
});

describe('earth radius', function() {
	it('should be configurable', function() {
		haversine.earthRadius = 1000000;
		expect(haversine.distance([40, 50], [40, 50])).to.equal(0);
		expect(haversine.distance([40, -70], [-70, 40])).to.not.be.closeTo(14890000, 5000);
	});
});