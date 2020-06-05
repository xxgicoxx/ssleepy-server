const { TrayService } = require('../services');

const trayService = new TrayService();

class TrayController {
  create() {
    trayService.create();
  }
}

module.exports = TrayController;
