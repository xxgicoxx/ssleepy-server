const {
  app, Menu, Tray, shell,
} = require('electron');
const path = require('path');

const ip = require('ip');

let tray = null;

class TrayService {
  create() {
    tray = new Tray(this.getIconPath());

    const contextMenu = Menu.buildFromTemplate([
      {
        label: `http://${ip.address()}:1905`,
      },
      { type: 'separator' },
      {
        label: 'About',
        async click() {
          shell.openExternal('https://github.com/xxgicoxx/ssleepy-server');
        },
      },
      { type: 'separator' },
      {
        label: 'Quit',
        async click() {
          app.quit();
        },
      },
    ]);

    tray.setToolTip('SSleepy Server');
    tray.setContextMenu(contextMenu);
  }

  getIconPath() {
    if (app.isPackaged) {
      return path.join(process.resourcesPath, 'static', 'img', 'trayTemplate.png');
    }

    return `${path.join(__dirname, '../static/img/trayTemplate.png')}`;
  }
}

module.exports = TrayService;
