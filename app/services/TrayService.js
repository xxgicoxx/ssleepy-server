const {
  app, Menu, Tray, shell,
} = require('electron');
const path = require('path');

const ip = require('ip');

let tray = null;

class TrayService {
  create() {
    tray = new Tray(path.join(__dirname, '../resources/img/sleepTemplate.png'));
    const contextMenu = Menu.buildFromTemplate([
      {
        label: `http://${ip.address()}:1905`,
      },
      { type: 'separator' },
      {
        label: 'About',
        click() {
          shell.openExternal('https://github.com/xxgicoxx/ssleepy-server');
        },
      },
      { type: 'separator' },
      {
        label: 'Quit',
        click() {
          app.quit();
        },
      },
    ]);

    tray.setToolTip('SSleepy Server');
    tray.setContextMenu(contextMenu);
  }
}

module.exports = TrayService;
