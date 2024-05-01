// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// create a route for the comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
