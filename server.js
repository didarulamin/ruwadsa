// A simple Node.js web server to serve a single HTML page.

// 1. Import required modules
const http = require("http"); // To create the server
const fs = require("fs"); // To read files from the system
const path = require("path"); // To handle file paths correctly

// 2. Define server configuration
const hostname = "0.0.0.0"; // Listen on all available network interfaces
const port = 3007; // The port the server will run on (UPDATED)

// 3. Define the path to your HTML file
const filePath = path.join(__dirname, "index.html");

// 4. Create the HTTP server
const server = http.createServer((req, res) => {
  // Read the index.html file from the disk
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If there's an error (e.g., file not found), send a 500 response
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading index.html");
      console.error(`Error reading file: ${err}`);
      return;
    }

    // If the file is read successfully, send it to the client
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

// 5. Start the server and listen for requests
server.listen(port, hostname, () => {
  console.log(`✅ Server is running successfully!`);
  console.log(`Navigate to http://localhost:${port} in your browser.`);
});
