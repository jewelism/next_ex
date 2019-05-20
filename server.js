const express = require('express');
const helmet = require('helmet');
const next = require('next');
const https = require('https');
const {parse} = require('url');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./dev/key.pem'),
  cert: fs.readFileSync('./dev/cert.pem')
}

app
  .prepare()
  .then(() => {
    if (dev) {
      https.createServer(httpsOptions, (req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      })
        .listen(8080, err => {
          if (err) throw err
          // eslint-disable-next-line no-console
          console.log('> Ready on https://localhost:8000')
        });
    } else {
      const server = express();
      server.use(helmet());

      server.get('*', (req, res) => {
        return handle(req, res)
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

