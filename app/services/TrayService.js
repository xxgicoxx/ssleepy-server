const {
  app, Menu, Tray, shell,
} = require('electron');
const path = require('path');

const ip = require('ip');

const { constants } = require('../utils');

let tray = null;

class TrayService {
  create() {
    tray = new Tray(this.getIconPath());

    const contextMenu = Menu.buildFromTemplate([
      {
        label: `${constants.PROTOCOL}://${ip.address()}:${constants.PORT}`,
      },
      { type: constants.SEPARATOR },
      {
        label: constants.MENU_ABOUT,
        async click() {
          shell.openExternal(constants.MENU_ABOUT_LINK);
        },
      },
      { type: constants.SEPARATOR },
      {
        label: constants.MENU_QUIT,
        async click() {
          app.quit();
        },
      },
    ]);

    tray.setToolTip(constants.APP_NAME);
    tray.setContextMenu(contextMenu);
  }

  getIconPath() {
    if (app.isPackaged) {
      return path.join(process.resourcesPath, ...constants.PATH_TRAY_TEMPLATE_PACKAGE);
    }

    return `${path.join(__dirname, constants.PATH_TRAY_TEMPLATE)}`;
  }
}

module.exports = TrayService;
