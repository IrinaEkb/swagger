const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..', '..'),
  testEnvironment: 'jsdom',
  testMatch: ['**/test/mocha/build-artifacts/es-bundle-core.js'],
};
