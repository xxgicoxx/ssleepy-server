const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');

const desktop = require('../../server/routes/desktop');

const app = express();
const server = http.createServer(app);

class RestService {
  async start() {
    app.use(cors({ origin: '*' }));
    app.use(logger('dev'));
    app.use(helmet({ hidePoweredBy: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', desktop);

    server.listen(1905);

    return server;
  }
}

module.exports = RestService;
