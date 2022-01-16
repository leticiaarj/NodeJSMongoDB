const _ = require("lodash");

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];

const merge = _.merge(a, b);
const difference = _.difference(a, b)

//console.log(merge);
console.log(difference);