/**
 * android-style-logging
 *
 * @author Koenrad MacBride.
 * MIT Licensed
 */

const Log = require('../src/android-style-logging')

const TAG = 'AndroidStyleLogging'

let logging_options = {
  //conf: require('./test-settings.json')
  conf: require('../config/disabled')
}

const log = new Log(logging_options);

log.v(TAG, "This should show up")
log.d(TAG, "This should show up")
log.i(TAG, "This should show up")
log.w(TAG, "This should show up")
log.e(TAG, "This should show up")

/*
const log = new Log({
  colors:{
    i: {
      message: {
        fgColor: 'green'
      }
    }
  }
});

log.setColor({
  e: {
    message: {
      bgColor: 'green'
    }
  }
})

log.setEnabled({
  v: false,
  i: false
})

log.showCurrentSettings()

log.showExamples()
*/

//log.showfgColors()
//log.showbgColors()
