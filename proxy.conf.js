const authTarget = 'http://api.openweathermap.org';
const PROXY_CONFIG = {
  "*": {
    "target": authTarget,
    "secure": false,
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;
