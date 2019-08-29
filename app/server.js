/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const path = require('path');
const pino = require('express-pino-logger');
const routes = require('./routes');

const serverPort = process.env.PORT || 3010;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();
    const pinoLogger = pino();

    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(express.static(path.join(__dirname, '../static')));
    server.use(pinoLogger);

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
