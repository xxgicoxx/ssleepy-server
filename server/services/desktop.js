const wintools = require('wintools');
const robot = require('robotjs');

async function playpause(req, res) {
  try {
    robot.keyTap('audio_pause');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function next(req, res) {
  try {
    robot.keyTap('audio_next');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function prev(req, res) {
  try {
    robot.keyTap('audio_prev');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function volumeup(req, res) {
  try {
    robot.keyTap('audio_vol_up');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function volumedown(req, res) {
  try {
    robot.keyTap('audio_vol_down');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function mute(req, res) {
  try {
    robot.keyTap('audio_mute');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function fullscreen(req, res) {
  try {
    robot.keyTap('f11');

    res.status(200);
    res.send();
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function shutdown(req, res) {
  try {
    wintools.shutdown.poweroff(() => {
      res.status(200);
      res.send();
    });
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

async function restart(req, res) {
  try {
    wintools.shutdown.restart(() => {
      res.status(200);
      res.send();
    });
  } catch (ex) {
    res.status(500);
    res.send();
  }
}

module.exports = {
  playpause,
  next,
  prev,
  volumeup,
  volumedown,
  mute,
  fullscreen,
  shutdown,
  restart,
};
