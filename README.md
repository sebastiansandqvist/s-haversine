# s-haversine

[![NPM version](https://img.shields.io/npm/v/s-haversine.svg)](https://www.npmjs.com/package/s-haversine) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-haversine.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-haversine.svg)](https://travis-ci.org/sebastiansandqvist/s-haversine) [![NPM license](https://img.shields.io/npm/l/s-haversine.svg)](https://www.npmjs.com/package/s-haversine)

## About
This module calculates the distance between two points on Earth using lat/long coordinates. It is based on the haversine formula and includes a utility to convert from degrees/minutes/seconds to the signed decimal degrees format needed for the formula to work.

## Usage
Get a pair of latitude/longitude coordinates (eg. from the geolocation api), then use them as the arguments for the `distance` method. Example:
```javascript
var haversine = require('s-haversine');

var lat1 = 36.151829;
var lon1 = -115.143296;
var lat2 = 36.151465
var lon2 = -115.146284;

haversine.distance(lat1, lon1, lat2, lon2); // 271.314... (meters)
```

Use the `toDecimal` method if your input is in degrees/minutes/seconds format, such as `40 20 50W` or `40°20'50" S`. 
```javascript
haversine.toDecimal('40 20 50W'); // -40.34722... (degrees)
```

## License
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.