// Requiring objects from other files in this folder
const sum = require("./sum");
const sub = require("./sub");
const mul = require("./mul");
const div_mod = require("./div_mod");

let obj = {sum, sub, mul, div_mod};

// Sending the obj as export for other file to use ..........
module.exports = obj;    

// Name of this file must be index.js for this directary to be accessed from outside.