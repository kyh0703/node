import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello node!</h1>');
    res.end('<p>Hello Server!</p>');
  })
  .listen(8080, () => {
    console.log('listen');
  });
