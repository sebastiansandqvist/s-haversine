const haversine = module.exports = {};

// configurable earthRadius (in meters)
haversine.earthRadius = 6371000;

// convert degrees to radians
haversine.degToRad = function(deg) {
  return deg * (Math.PI / 180);
};


// distance between two points
haversine.distance = function(coords1, coords2) {
  const lat1 = coords1[0];
  const lon1 = coords1[1];
  const lat2 = coords2[0];
  const lon2 = coords2[1];

  const latitudeDifference = this.degToRad(lat2 - lat1);
  const logitudeDifference = this.degToRad(lon2 - lon1);

  const n =
    Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
    Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
    Math.sin(logitudeDifference / 2) * Math.sin(logitudeDifference / 2);

  const distance = 2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n));

  return this.earthRadius * distance;
};


// convert degrees/minutes/seconds to decimal degrees
haversine.toDecimal = function(str) {
  str = str.toLowerCase(); // throws if input is not a string
  const lastChar = str.slice(-1);

  let negative = false;

  if (lastChar === 'w' || lastChar === 's') {
    negative = true; // south and west => negative
  }

  const values = str.split(/[^0-9.]/);

  // convert strings to numbers
  let i;
  for (i = 0; i < values.length; i++) {
    // remove empty values
    if (!values[i]) {
      values.splice(i, 1);
      continue;
    }
    values[i] = parseFloat(values[i]);
  }

  // make sure array has length 3
  for (i = 0; i < 3; i++) {
    values[i] = values[i] || 0;
  }

  const result = values[0] + (values[1] / 60) + (values[2] / 3600);

  if (negative) return result * -1;
  return result;
};
