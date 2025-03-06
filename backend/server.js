const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.end('Hello from Node server!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
