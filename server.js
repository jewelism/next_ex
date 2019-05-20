const express = require('express');
const helmet = require('helmet');
const next = require('next');
// const https = require('https');
// const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    // https.createServer(sslOptions, (req, res) => {
    //     // Be sure to pass `true` as the second argument to `url.parse`.
    //     // This tells it to parse the query portion of the URL.
    //     const parsedUrl = parse(req.url, true);
    //     handle(req, res, parsedUrl);
    //   })
    //   .listen(8000, err => {
    //     if (err) throw err
    //     // eslint-disable-next-line no-console
    //     console.log('> Ready on https://localhost:8000')
    //   })

    const server = express();

    server.use(helmet());

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = {title: req.params.id};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });

  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

