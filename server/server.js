const path = require('path');
const express = require('express');

// Create the express application
const app = express();

// Use the public directory to serve up all static assets
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Handle get requests not in the public folder i.e. serve them the index.html page
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Listen on port from env / 3000
app.listen(port, () => {
  console.log('Server is up on port 3000!');
});
