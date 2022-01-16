const minimist = require("minimist");
const args = minimist(process.argv.slice(2)); //externo
const sum = require('./sum').sum

const a = parseInt(args['a']);
const b = parseInt(args['b']);

sum(a, b);