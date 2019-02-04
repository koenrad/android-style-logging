/**
 * android-style-logging
 *
 * @author Koenrad MacBride.
 * MIT Licensed
 */

class Log {
  constructor(settings) {
    this._TAG = 'ASL'

    this._resetColor = '\x1b[0m'
    //Using 8-bit colors
    this._fgColors = {
      black: '[38;5;232m',
      red: '[38;5;196m',
      green: '[38;5;46m',
      yellow: '[38;5;226m',
      blue: '[38;5;39m',
      magenta: '[38;5;201m',
      cyan: '[38;5;87m',
      white: '[38;5;231m'
    }

    this._bgColors = {
      black: '[48;5;232m',
      red: '[48;5;160m',
      green: '[48;5;28m',
      yellow: '[48;5;226m',
      blue: '[48;5;21m',
      magenta: '[48;5;93m',
      cyan: '[48;5;87m',
      white: '[48;5;231m',
    }

    //Load Defaults
    let defaults = require('../config/default.json')
    this._showSettings = defaults.showSettings
    this._showExample = defaults.showExample
    this._colors = defaults.colors
    this._enabled = defaults.enabled

    //Import custom settings
    if (settings) {
      //Check for a config file before importing settings
      if (settings.conf) {
        settings = settings.conf
      }

      if (settings.showSettings != null) {
        this._showSettings = settings.showSettings
      }
      if (settings.showExample != null) {
        this._showExample = settings.showExample
      }
      if (settings.enabled) {
        Object.assign(this._enabled, settings.enabled)
      }
      if (settings.colors) {
        Object.assign(this._colors, settings.colors)
      }
    }

    if (this._showSettings) {
      this.showCurrentSettings()
    }

    if (this._showExample) {
      this.showExamples()
    }
  }

  showCurrentSettings() {
    this.log(this._colors.i, this._TAG, '\nCurrent Settings\nenabled: ' + JSON.stringify(this._enabled, null, 2) + '\ncolors: ' + JSON.stringify(this._colors, null, 2))
  }

  showExamples() {
    this.log(this._colors.v, "verbose", "this is a verbose message")
    this.log(this._colors.d, "debug", "this is a debug message")
    this.log(this._colors.i, "info", "this is an info message")
    this.log(this._colors.w, "warn", "this is a warning message")
    this.log(this._colors.e, "error", "this is an error message")
    this.log(this._colors.v, "this is a verbose message with no tag")
    this.log(this._colors.d, "this is a debug message with no tag")
    this.log(this._colors.i, "this is an info message with no tag")
    this.log(this._colors.w, "this is a warning message with no tag")
    this.log(this._colors.e, "this is an error message with no tag")
  }

  showfgColors() {
    for (var i = 0; i < 256; i++) {
      console.log('\x1b[38;5;%smThis fgColor is \"[38;5;%sm\"', i.toString(), i.toString())
    }
    console.log(this._resetColor)
  }

  showbgColors() {
    for (var i = 0; i < 256; i++) {
      console.log('\x1b[48;5;%smThis bgColor is \"[48;5;%sm\"', i.toString(), i.toString())
    }
    console.log(this._resetColor)
  }

  setColor(colorObj) {
    Object.assign(this._colors, colorObj)
  }

  setEnabled(settingsObj) {
    Object.assign(this._enabled, settingsObj)
  }

  v(tag, msg) {
    if (this._enabled.v) {
      this.log(this._colors.v, tag, msg)
    }
  }

  d(tag, msg) {
    if (this._enabled.d) {
      this.log(this._colors.d, tag, msg)
    }
  }

  i(tag, msg) {
    if (this._enabled.i) {
      this.log(this._colors.i, tag, msg)
    }
  }

  w(tag, msg) {
    if (this._enabled.w) {
      this.log(this._colors.w, tag, msg)
    }
  }

  e(tag, msg) {
    if (this._enabled.e) {
      this.log(this._colors.e, tag, msg)
    }
  }

  log(colors, tag, msg) {
    //double check to make sure both everything exists'
    if (!colors.tag) {
      colors.tag = {}
    }
    if (!colors.message) {
      colors.message = {}
    }
    if (!colors.tag.fgColor) {
      colors.tag.fgColor = ''
    }
    if (!colors.tag.bgColor) {
      colors.tag.bgColor = ''
    }
    if (!colors.message.fgColor) {
      colors.message.fgColor = ''
    }
    if (!colors.message.bgColor) {
      colors.message.bgColor = ''
    }

    let tagfgColor = this.checkFgColor(colors.tag.fgColor)
    let tagbgColor = this.checkBgColor(colors.tag.bgColor)
    let msgfgColor = this.checkFgColor(colors.message.fgColor)
    let msgbgColor = this.checkBgColor(colors.message.bgColor)
    let fmt = ''
    if (msg) {
      fmt = tagfgColor + tagbgColor + "[%s]:" + this._resetColor + " " + msgfgColor + msgbgColor + "%s" + this._resetColor
    } else {
      msg = ""
      fmt = msgfgColor + msgbgColor + "%s%s" + this._resetColor
    }
    console.log(fmt, tag, msg)
  }

  checkFgColor(color) {
    if (color == '') return color
    if (color in this._fgColors) {
      color = this._fgColors[color]
    }

    return '\x1b' + color
  }

  checkBgColor(color) {
    if (color == '') return color
    if (color in this._bgColors) {
      color = this._bgColors[color]
    }
    return '\x1b' + color
  }
}

module.exports = Log
