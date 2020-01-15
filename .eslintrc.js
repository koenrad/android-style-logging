module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": [
      'airbnb-base',
      'plugin:prettier/recommended',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "prettier/prettier": [
        "error", 
        { 
          "printWidth": 100,
          "singleQuote": true,
          "trailingComma": "all", 
        }],
      "max-len": 'off',
      "no-param-reassign": 'off',
      'no-case-declarations': 'off',
      "no-await-in-loop":'off',
      "consistent-return":'off',
      "no-use-before-define":'off', //recursive functions call themselves
      "no-underscore-dangle": 'off',
      "no-console": 'off',
    "comma-dangle": ['error', {
      "arrays": 'always-multiline',
      "objects": 'always-multiline',
      "imports": 'always-multiline',
      "exports": 'always-multiline',
      "functions": 'ignore',
    }],
  },
};

