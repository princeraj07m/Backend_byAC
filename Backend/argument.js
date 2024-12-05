const arg = process.argv; // process.argv is an array that contains arguments passed.
// ARRAY  WITH 2 DEFAULT VALUES ONE TO NODE ROOT PATH AND ANOTHER TO RUNNING FILE PATH

for(var i = 2; i<arg.length; i++){
    console.log(`Hello to ${arg[i]}`);
}



// USE COMMAND TO RUN THIS FILE : node argument.js jerry prince
//OUTPUT :
//Hello to jerry
//Hello to prince
