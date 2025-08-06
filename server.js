// A simple Express.js web server to serve a single HTML page.

// 1. Import required modules
const express = require("express");
const path = require("path");

// 2. Initialize the Express app
const app = express();

// 3. Define server configuration
const port = 7002;

// 4. Serve static files
// This tells Express to serve any files from the current directory (where your index.html is)
app.use(express.static(__dirname));

// 5. Define the main route
// When someone visits the root URL ('/'), send them the index.html file.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 6. Start the server and listen for requests
app.listen(port, () => {
  console.log(`✅ Express server is running successfully!`);
  console.log(`Navigate to http://localhost:${port} in your browser.`);
});
