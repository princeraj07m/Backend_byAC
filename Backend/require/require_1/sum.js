const sum = (a,b) => a + b;


const obj = {
    sum : sum,
};

// Sending the obj as export for other file to use ..........
module.exports = obj;