const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'react/static-property-placement': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js', // vscode doesn't resolve this
      },
    },
  },
};
