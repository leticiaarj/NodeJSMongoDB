const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log(args);

const name = args['name'];
const age = args['age'];
console.log(name, age);
console.log(`My name is ${name} and I have ${age} years old!`)