let express = require('express');
let app = express();

console.log("Hello World");

// Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path.
app.get('/', (req, res) => {
  res.send('Hello Express');
}
);




































 module.exports = app;
