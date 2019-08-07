/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const routes = require('./routes');

const serverPort = process.env.PORT || 3010;
const dev = process.env.NODE_DEV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();
    // server.use(bodyParser.json());
    // server.use(bodyParser.urlencoded({extended: true}));

    server.get('/user/:id', (req, res) => {
      const actualPage = '/user';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(serverPort, (err) => {
      if (err) throw err;
      console.log(`> Ready at http://localhost:${serverPort}`);
    });
  })
  .catch((ex) => {
    console.error(ex);
    process.exit(1);
  });
