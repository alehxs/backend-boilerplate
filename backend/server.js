const http = require('http');

const PORT = 3002;

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.end('Hello from Node server!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
