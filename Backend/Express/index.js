const express = require('express');
const app = express();

let port = 3000;


//app.use is deafault reponse for all request if no route to it.
// app.use((req,res) => {
//     console.log("Request received ! ");
//     res.send('Hello World1');
// });

//   " * " means it will respone to any path if not valid {* = all}.
// app.get('*', function (req, res) {
//     res.send('Hello World');  
//   });

app.get('/', (req, res) => {
  res.send('Hello World');  // we can send plain text , html code , variable or JSON.
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("Nothing searched")
    }
    res.send(`Hello you searched ${q}`);  // we can send plain text , html code , variable or JSON.
  });

app.listen(port, () =>{
    console.log(`Lstenning on port : ${port} `);
});



// console.log(app)  // To see what does the express() function returns.