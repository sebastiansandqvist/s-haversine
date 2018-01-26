var haversine = module.exports = {};

// configurable earthRadius (in meters)
haversine.earthRadius = 6371000;

// convert degrees to radians
haversine.degToRad = function(deg) {
  return deg * (Math.PI / 180);
};


// distance between two points
haversine.distance = function(coords1, coords2) {
  var lat1 = coords1[0];
  var lon1 = coords1[1];
  var lat2 = coords2[0];
  var lon2 = coords2[1];

  var latitudeDifference = this.degToRad(lat2 - lat1);
  var logitudeDifference = this.degToRad(lon2 - lon1);

  var n =
    Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
    Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
    Math.sin(logitudeDifference / 2) * Math.sin(logitudeDifference / 2);

  var distance = 2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n));

  return this.earthRadius * distance;
};


// convert degrees/minutes/seconds to decimal degrees
haversine.toDecimal = function(str) {
  str = str.toLowerCase(); // throws if input is not a string
  var lastChar = str.slice(-1);

  var negative = false;

  if (lastChar === 'w' || lastChar === 's') {
    negative = true; // south and west => negative
  }

  var values = str.split(/[^0-9.]/);

  // convert strings to numbers
  var i;
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

  var result = values[0] + (values[1] / 60) + (values[2] / 3600);

  if (negative) return result * -1;
  return result;
};
