const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example API route
app.get('/', (req, res) => {
  res.send('Hello, this is my Node.js API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
