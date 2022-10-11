const socket = require('socket.io', { rememberTransport: false, transports: ['websocket'] });
const {
  keyboard,
  mouse,
  Key,
  Point,
} = require('@nut-tree/nut-js');

class SocketService {
  start(server) {
    const io = socket.listen(server);

    io.on('connection', (client) => {
      let mousePosition = 0;
      let posX = 0;
      let posY = 0;

      client.on('movemouse', async (pos) => {
        mousePosition = await mouse.getPosition();

        posX = (mousePosition.x + pos.x * 1.2);
        posY = (mousePosition.y + pos.y * 1.2);

        const targetPoint = new Point(posX, posY);

        mouse.setPosition(targetPoint);
      });

      client.on('keyboard', async (value) => {
        await keyboard.type(value.text);
      });

      client.on('backspace', async () => {
        await keyboard.type(Key.Backspace);
      });
    });
  }
}

module.exports = SocketService;
