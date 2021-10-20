// const http = require('http');

// let server = http.createServer(function (request, response) {
//   response.end('<h1>Hello World!</h1>');
// });

// server.listen(3000);

// let url = new URL('http://example.com/business/mart/item?category=14&id=2965');

// console.log(url.protocol);
// console.log(url.host);
// console.log(url.pathname);
// console.log(url.search);

const http = require('http');

const express = require('express');

const app = express();

// const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

// const server = http.createServer((request, response) => {
//   // console.log(request.url);
//   // response.end('<h1>Hello World!</h1>');

//   if (request.url === '/') {
//     response.end('<h1>Welcome!</h1>');
//   } else if (request.url === '/users') {
//     response.end(`<h1>${users}</h1>`);
//   } else if (request.url.split('/')[1] === 'users') {
//     // url : /users/1, /users/2 ...
//     const uesrIdx = request.url.split('/')[2];
//     const userName = users[uesrIdx - 1];

//     response.end(`<h1>${userName}</h1>`);
//   } else {
//     response.end('<h1>Page Not Available</h1>');
//   }
// });

// server.listen(3000);

const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  console.log(request.params);
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);