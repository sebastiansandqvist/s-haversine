# s-haversine

[![NPM version](https://img.shields.io/npm/v/s-haversine.svg)](https://www.npmjs.com/package/s-haversine) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-haversine.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-haversine.svg)](https://travis-ci.org/sebastiansandqvist/s-haversine) [![NPM license](https://img.shields.io/npm/l/s-haversine.svg)](https://www.npmjs.com/package/s-haversine) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-haversine/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-haversine/coverage)

## About
This module calculates the distance between two points on Earth using lat/long coordinates. It is based on the haversine formula and includes a utility to convert from degrees/minutes/seconds to the signed decimal degrees format needed for the formula to work.

This is great for use with the html5 geolocation api, which provides lat/long coordinates.

## Usage
Get a pair of latitude/longitude coordinates (eg. from the geolocation api), then use them as the arguments for the `distance` method. Example:
```javascript
var haversine = require('s-haversine');

// ---------- [latitude, longitude];
var coords1 = [36.151829, -115.143296];
var coords2 = [36.151465, -115.146284];

haversine.distance(coords1, coords2); // 271.314... (meters)
```

#### Converting deg/min/sec to decimal
This module requires coordinates to be in a signed decimal format. If you have coordinates in degrees/minutes/seconds format, use the `toDecimal` method to convert them. For example, an input such as `40 20 50W` or `40°20'50" S` will return roughly `-40.34722`.

```javascript
haversine.toDecimal('40 20 50W'); // -40.34722... (degrees)
```

#### Earth radius
The math involved in the haversine formula depends on knowledge of the Earth's radius. This is configured by default as `6371000` (in meters). If you need to fine tune this or use another radius, you can configure this by setting `haversine.earthRadius` to a number before calling the distance method.

## License
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.