module.exports = {
  env: {
    node: true,
    browser: false,
    es6: false,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
  },
};
