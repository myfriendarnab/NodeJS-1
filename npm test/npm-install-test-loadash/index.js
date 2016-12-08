//index.js to check npm install loadash
//Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

var loadash = require("lodash");
var output = loadash.without([1,2,3],1);
console.log(output);