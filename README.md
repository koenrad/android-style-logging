# Android Style Logging

Colorful logging output for node console applications using basic log levels. I created this package because I really liked the way Android implemented logging level output in the console when using Android Studio.


| log level   | function |
|---------|----------|
| verbose | v        |
| debug   | d        |
| info    | i        |
| warn    | w        |
| error   | e        |

## Installation

Install using npm

``` bash
npm i android-style-logging
```

## Usage

``` javascript
const Log = require('android-style-logging')
const log = new Log({ conf: require('./my-log-settings-file.json') });
const TAG = 'ASL'

log.v(TAG, "This should show up as a verbose output")
log.d(TAG, "This should show up as a debug output")
log.i(TAG, "This should show up as an info output")
log.w(TAG, "This should show up as a warn output")
log.e(TAG, "This should show up as an error output")
```




### Methods


| function | param(s)               | Description |
|----------|----------------------| - |
| v        | (TAG \<optional>, MSG) | verbose output |
| d        | (TAG \<optional>, MSG) | debug output |
| i        | (TAG \<optional>, MSG) | info output |
| w        | (TAG \<optional>, MSG) | warn output |
| e        | (TAG \<optional>, MSG) | error output |
|showfgColors |  | displays all possible foreground colors |
|showbgColors | | displays all possible background colors |
|setColor | (colorObject) | change color options |
|setEnabled | (enabledObject) | change which log levels are enabled/disabled |

### Color Formats

I am using the ANSI escape character with 8 bit colors. You can read more about it on this [stackoverflow](https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences) question.

You can put your own colors in the config:

Foreground color example: `[38;5;232m`

Background color example: `[48;5;232m`

You can use `showfgColors` and `showbgColors` to easily choose the colors you want.

### Environment Variables
| variable | value               | description |
|----------|----------------------| - |
| ASL_LOG        | options to enable | enables logging levels |

The following example will enable `info`, `verbose` and `error` regardless of your config. Options will never be disabled with this environment variable
```
ASL_LOG=ive node app.js
```

### Default Config
```json
{
  "colors":{
    "v": {
      "tag": {
        "fgColor": "black",
        "bgColor": "white"
      },
      "message": {
        "fgColor": "white",
        "bgColor": ""
      }
    },
    "d": {
      "tag": {
        "fgColor": "black",
        "bgColor": "green"
      },
      "message": {
        "fgColor": "green",
        "bgColor": ""
      }
    },
    "i": {
      "tag": {
        "fgColor": "black",
        "bgColor": "cyan"
      },
      "message": {
        "fgColor": "cyan",
        "bgColor": ""
      }
    },
    "w": {
      "tag": {
        "fgColor": "black",
        "bgColor": "yellow"
      },
      "message": {
        "fgColor": "yellow",
        "bgColor": ""
      }
    },
    "e": {
      "tag": {
        "fgColor": "white",
        "bgColor": "red"
      },
      "message": {
        "fgColor": "red",
        "bgColor": ""
      }
    }
  },
  "enabled": {
    "v": true,
    "d": true,
    "i": true,
    "w": true,
    "e": true
  },
  "showSettings": false,
  "showExample": false
}
```
