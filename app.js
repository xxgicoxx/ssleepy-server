const { app } = require('electron');

const { RestController, TrayController, SocketController } = require('./app/controllers');

const isMac = process.platform === 'darwin';

if (isMac) {
  app.dock.hide();
}

app.setLoginItemSettings({
  openAtLogin: true,
});

app.on('ready', () => {
  const restController = new RestController();
  const socketController = new SocketController();
  const trayController = new TrayController();

  restController.start().then((server) => {
    socketController.start(server);
  });

  trayController.create();
});

app.on('window-all-closed', () => {
  app.quit();
});
