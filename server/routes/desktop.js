const express = require('express');
const desktop = require('../services/desktop');

const routes = express();

routes.post('/shutdown', desktop.shutdown);
routes.post('/restart', desktop.restart);
routes.post('/playpause', desktop.playpause);
routes.post('/next', desktop.next);
routes.post('/prev', desktop.prev);
routes.post('/volumeup', desktop.volumeup);
routes.post('/volumedown', desktop.volumedown);
routes.post('/mute', desktop.mute);
routes.post('/fullscreen', desktop.fullscreen);

module.exports = routes;
