const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {
  mouse, keyboard, Key, Button,
} = require('@nut-tree/nut-js');

const { constants } = require('../utils');

async function playpause(req, res) {
  try {
    await keyboard.type(Key.AudioPause);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function next(req, res) {
  try {
    await keyboard.type(Key.AudioNext);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function previous(req, res) {
  try {
    await keyboard.type(Key.AudioPrev);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function volumeup(req, res) {
  try {
    await keyboard.type(Key.AudioVolUp);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function volumedown(req, res) {
  try {
    await keyboard.type(Key.AudioVolDown);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function mute(req, res) {
  try {
    await keyboard.type(Key.AudioMute);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function refresh(req, res) {
  try {
    await keyboard.type(Key.F5);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function close(req, res) {
  try {
    await keyboard.pressKey(Key.LeftAlt, Key.F4);
    await keyboard.releaseKey(Key.LeftAlt, Key.F4);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function fullscreen(req, res) {
  try {
    await keyboard.type(Key.F11);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function shutdown(req, res) {
  try {
    const { stdout, stderr } = await exec(constants.COMMAND_SHUTDOWN);

    res.status(200).send({ stdout, stderr });
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function restart(req, res) {
  try {
    const { stdout, stderr } = await exec(constants.COMMAND_RESTARTconstants.COMMAND_RESTART);

    res.status(200).send({ stdout, stderr });
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function leftclick(req, res) {
  try {
    await mouse.click(Button.LEFT);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function rightclick(req, res) {
  try {
    await mouse.click(Button.RIGHT);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

async function write(req, res) {
  try {
    const { text } = req.body;

    keyboard.config.autoDelayMs = 0;
    keyboard.type(text);

    res.status(201).send();
  } catch (ex) {
    res.status(500);
    res.send(ex);
  }
}

module.exports = {
  playpause,
  next,
  previous,
  volumeup,
  volumedown,
  mute,
  refresh,
  close,
  fullscreen,
  shutdown,
  restart,
  leftclick,
  rightclick,
  write,
};
