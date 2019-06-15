const express = require('express');
const helmet = require('helmet');
const next = require('next');
const https = require('https');
const {join} = require('path');
const {parse} = require('url');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const {
  BOARD_TYPE, NOTICE_ID, EVENT_ID, INFLUENCER_ID, PRODUCT_ID
} = require('./constants/route');

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

  server.get(`/board/:${BOARD_TYPE}`, (req, res) => {
    return app.render(req, res, '/board', {[BOARD_TYPE]: req.params[BOARD_TYPE]});
  });

  server.get(`/notice/:${NOTICE_ID}`, (req, res) => {
    return app.render(req, res, '/notice', {[NOTICE_ID]: req.params[NOTICE_ID]});
  });

  server.get(`/event/:${EVENT_ID}`, (req, res) => {
    return app.render(req, res, '/event', {[EVENT_ID]: req.params[EVENT_ID]});
  });
  
  server.get(`/influencer/:${INFLUENCER_ID}`, (req, res) => {
    const recode = {
      [INFLUENCER_ID]: req.params[INFLUENCER_ID]
    };
    return app.render(req, res, '/influencer', recode);
  });
  
  server.get(`/product/:${PRODUCT_ID}`, (req, res) => {
    const recode = {
      [INFLUENCER_ID]: req.query[INFLUENCER_ID],
      [PRODUCT_ID]: req.params[PRODUCT_ID],
    };
    return app.render(req, res, '/product', recode);
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

