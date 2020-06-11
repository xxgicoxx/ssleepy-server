const { RestService } = require('../services');

const restService = new RestService();

class RestController {
  async start() {
    return restService.start();
  }
}

module.exports = RestController;
