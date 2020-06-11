const { SocketService } = require('../services');

const socketService = new SocketService();

class SocketController {
  start(server) {
    socketService.start(server);
  }
}

module.exports = SocketController;
