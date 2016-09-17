module.exports = {
  "parser": "babel-eslint",

  "extends": ["eslint:recommended"],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },

  "plugins": [
  ],

  "globals": {
    "define": true
  },

  "rules": {
    "strict": ["error", "global"],
    "no-unused-vars": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "camelcase": ["error", { "properties": "always" }],
    "consistent-return": "error",
    "arrow-spacing": "off",
    "no-undef": 0,
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "semi": 0,
    "no-confusing-arrow": ["error", { "allowParens": false }],
    "no-constant-condition": "error",
    "no-labels": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "func-style": "off"
  }
}
