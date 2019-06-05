const express = require('express');
const helmet = require('helmet');
const next = require('next');
const https = require('https');
const {join} = require('path');
const {parse} = require('url');
const fs = require('fs');
const cookieParser = require('cookie-parser');


const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./dev/key.pem'),
  cert: fs.readFileSync('./dev/cert.pem')
};

function createServer() {
  const server = express();
  server.use(helmet());
  server.use(cookieParser());

  server.get('/influencer/:iid', (req, res) => {
    const {iid} = req.params;
    return app.render(req, res, '/influencer', {iid});
  });

  server.get('/product/:pid', (req, res) => {
    const {pid} = req.params;
    const {iid} = req.query;
    return app.render(req, res, '/product', {pid, iid});
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const {pathname} = parsedUrl;
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  });
  return server;
}

app
  .prepare()
  .then(() => {
    const server = createServer();
    if (dev) {
      https.createServer(httpsOptions, server).listen(8080);
    } else {
      server.listen(3001, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3001');
      });
    }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

