const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const desktop = require('../../server/routes/desktop');

const app = express();

class RestService {
  start() {
    app.use(cors({ origin: '*' }));
    app.use(logger('dev'));
    app.use(helmet({ hidePoweredBy: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', desktop);

    const server = http.createServer(app);

    server.listen(1905);
  }
}

module.exports = RestService;
