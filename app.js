const { app } = require('electron');

const { RestController, TrayController } = require('./app/controllers');

const isMac = process.platform === 'darwin';

if (isMac) {
  app.dock.hide();
}

app.setLoginItemSettings({
  openAtLogin: true,
});

app.on('ready', () => {
  const restController = new RestController();
  const trayController = new TrayController();

  restController.start();
  trayController.create();
});

app.on('window-all-closed', () => {
  app.quit();
});
