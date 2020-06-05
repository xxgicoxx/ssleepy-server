const { RestService } = require('../services');

const restService = new RestService();

class RestController {
  start() {
    restService.start();
  }
}

module.exports = RestController;
