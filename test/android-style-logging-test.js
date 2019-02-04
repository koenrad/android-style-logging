/**
 * android-style-logging
 *
 * @author Koenrad MacBride.
 * MIT Licensed
 */

 const Log = require('../src/android-style-logging')

let logging_options = {
  //conf: require('./test-settings.json')
  conf: require('../config/default')
}

const log = new Log();

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
