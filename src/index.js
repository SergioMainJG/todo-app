import { createServer } from 'node:http';

const server = createServer((request, response) => {
  const res = `
  http: ${request.httpVersion}
  url: ${request.url}
  meth: ${request.method}
  `;
  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(res);
  }
  if (request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(res);
  }
});

const host = '0.0.0.0';

server.listen(3000, host, () => {
  console.log(`Server running in ${host}:3000`);
});