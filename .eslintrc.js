'use strict';

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // or 'plugin:vue/base'
    '@hydrant/eslint-config/modern',
  ],
  env: {
    browser: true,
  },
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
