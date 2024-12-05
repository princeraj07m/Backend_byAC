const div = (a,b) => a / b;
const mod = (a,b) => a % b;

const obj = {
    div : div,
    mod : mod,
};

// Sending the obj as export for other file to use ..........
module.exports = obj;