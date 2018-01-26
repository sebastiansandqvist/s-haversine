import test from 'ava';
import haversine from '../';

test('calculate distance between two points', (t) => {
  t.is(haversine.distance([40, 50], [40, 50]), 0);
  t.true(haversine.distance([40, -70], [-70, 40]) - 14890000 < 5000, 'Calculated distance - known distance should be ~14890000m, tolerance 5000m');
  t.true(haversine.distance([36.151829, -115.143296], [36.151465, -115.146284]) - 300 < 100, 'Calculated more precise distance - known distance should be ~300m, tolerance 100m');
});

test('degrees minutes seconds to decimal', (t) => {
  t.is(haversine.toDecimal('40° N'), 40);
  t.is(haversine.toDecimal('40.1° N'), 40.1);
  t.is(haversine.toDecimal('40 20'), 40.333333333333336);
  t.is(haversine.toDecimal('40 20 0'), 40.333333333333336);
  t.is(haversine.toDecimal('40 20 50'), 40.34722222222222);
  t.is(haversine.toDecimal('40 20 50N'), 40.34722222222222);
  t.is(haversine.toDecimal('40 20 50W'), -40.34722222222222);
  t.is(haversine.toDecimal('40°20\'50" S'), -40.34722222222222);
});

test('degrees to radians', (t) => {
  t.is(haversine.degToRad(0), 0);
  t.is(haversine.degToRad(15), Math.PI / 12);
  t.is(haversine.degToRad(180), Math.PI);
  t.is(haversine.degToRad(360), Math.PI * 2);
});
