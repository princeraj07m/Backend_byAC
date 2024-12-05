const mul = (a,b) => a * b;


const obj = {
    mul : mul,
};

// Sending the obj as export for other file to use ..........
module.exports = obj;