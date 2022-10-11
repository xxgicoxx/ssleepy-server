const { app } = require('electron');

const { RestController, TrayController, SocketController } = require('./app/controllers');

const isMac = process.platform === 'darwin';
const isWin = process.platform === 'win32';

if (isWin) {
  app.setAppUserModelId('SSleepy Server');
}

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

app.on('closed', (event) => {
  event.preventDefault();
  app.hide();
});

app.on('window-all-closed', () => {
  app.quit();
});
