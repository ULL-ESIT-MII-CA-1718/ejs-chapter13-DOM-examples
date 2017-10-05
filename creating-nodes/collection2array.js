var arrayish = {0: "one", 1: "two", length: 2};
var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function(elt) { console.log(elt); });
// → one
//   two
var ar = Array.from(arrayish);
ar.forEach(function(elt) { console.log(elt); });
// → one
//   two
