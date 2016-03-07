var http = require('http');
var fs = require('fs');

function onRequest (req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url === '/app.js') {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    fs.createReadStream('./app.js').pipe(res);
  } else if (req.url === '/style.css') {
    res.writeHead(200, {"Content-Type": "text/css"});
    fs.createReadStream('./style.css').pipe(res);
  }

}

http.createServer(onRequest).listen(3333);
console.log('listening on', 3333);