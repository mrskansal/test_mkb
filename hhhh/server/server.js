const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Endpoint to serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  // Assuming you want to send JSON data
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
