const socket = require('socket.io', { rememberTransport: false, transports: ['websocket'] });
const {
  keyboard,
  mouse,
  Key,
  Point,
} = require('@nut-tree/nut-js');

const { constants } = require('../utils');

class SocketService {
  start(server) {
    const io = socket.listen(server);

    io.on(constants.ON_CONNECTION, (client) => {
      let mousePosition = 0;
      let posX = 0;
      let posY = 0;

      client.on(constants.ON_MOVE_MOUSE, async (pos) => {
        mousePosition = await mouse.getPosition();

        posX = (mousePosition.x + pos.x * 1.2);
        posY = (mousePosition.y + pos.y * 1.2);

        const targetPoint = new Point(posX, posY);

        mouse.setPosition(targetPoint);
      });

      client.on(constants.ON_KEYBOARD, async (value) => {
        await keyboard.type(value.text);
      });

      client.on(constants.ON_BACKSPACE, async () => {
        await keyboard.type(Key.Backspace);
      });
    });
  }
}

module.exports = SocketService;
