const socket = require('socket.io', { transports: ['websocket'] });
const robot = require('robotjs');

class SocketService {
  start(server) {
    const io = socket.listen(server);

    io.on('connection', (client) => {
      let mousePosition = 0;

      client.on('movemouse', (pos) => {
        mousePosition = robot.getMousePos();

        robot.moveMouse((mousePosition.x + pos.x * 1.5), (mousePosition.y + pos.y * 1.5));
      });
    });
  }
}

module.exports = SocketService;
