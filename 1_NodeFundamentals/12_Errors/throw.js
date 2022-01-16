const x = '10';

if(!Number.isInteger(x)){
    throw new Error("The x values is not a integer number!");
}

console.log("Continuing the code!")