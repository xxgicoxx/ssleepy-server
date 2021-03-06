const wintools = require('wintools');
const robot = require('robotjs');

async function playpause(req, res) {
  try {
    robot.keyTap('audio_pause');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function next(req, res) {
  try {
    robot.keyTap('audio_next');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function previous(req, res) {
  try {
    robot.keyTap('audio_prev');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function volumeup(req, res) {
  try {
    robot.keyTap('audio_vol_up');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function volumedown(req, res) {
  try {
    robot.keyTap('audio_vol_down');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function mute(req, res) {
  try {
    robot.keyTap('audio_mute');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function close(req, res) {
  try {
    robot.keyTap('f4', ['alt']);

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function fullscreen(req, res) {
  try {
    robot.keyTap('f11');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function shutdown(req, res) {
  try {
    wintools.shutdown.poweroff(() => {
      res.status(200);
      res.send({});
    });
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function restart(req, res) {
  try {
    wintools.shutdown.restart(() => {
      res.status(200);
      res.send({});
    });
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function leftclick(req, res) {
  try {
    robot.mouseClick();

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

async function rightclick(req, res) {
  try {
    robot.mouseClick('right');

    res.status(200);
    res.send({});
  } catch (ex) {
    res.status(500);
    res.send({});
  }
}

module.exports = {
  playpause,
  next,
  previous,
  volumeup,
  volumedown,
  mute,
  close,
  fullscreen,
  shutdown,
  restart,
  leftclick,
  rightclick,
};
