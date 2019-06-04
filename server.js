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

app
  .prepare()
  .then(() => {
    if (dev) {
      const server = express();
      server.use(helmet());
      server.use(cookieParser());
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
      https.createServer(httpsOptions, server).listen(8080);
    } else {
      const server = express();
      server.use(helmet());
      server.use(cookieParser());
      server.get('*', (req, res) => {
        return handle(req, res);
      });
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

