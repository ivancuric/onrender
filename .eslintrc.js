module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "globals": {
    "log": true,
    "raf": true,
    "sto": true,
    "moment": true,
    "Pikaday": true
  },
  "rules": {
    "no-console": 0,
    "no-unused-vars": [2, { "args": "none" }],
    'no-unused-vars': 0,
    "no-unused-expressions": 2,
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
  },
};
