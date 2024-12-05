const sub = (a,b) => a - b;

const obj = {
    sub : sub,
};

// Sending the obj as export for other file to use ..........
module.exports = obj;