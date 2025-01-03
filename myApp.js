let express = require('express');
let app = express();

console.log("Hello World");

// Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path.
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// }
// );

// Send the /views/index.html file as a response to GET requests to the / path.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
}
);

// Mount the express.static() middleware to the path /public with app.use(). The absolute path to the assets folder is __dirname + /public
app.use('/public', express.static(__dirname + '/public'));
































 module.exports = app;
