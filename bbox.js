var turfbboxpoly = require('turf-extent');

module.exports = function(geometry) {
  console.log(geometry);
  var poly = turfbboxpoly(geometry);
  console.log(poly);
  return poly;
};