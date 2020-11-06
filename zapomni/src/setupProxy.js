const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'https://zapomni.lastick.ru',
        changeOrigin: true,
        proxyTimeout: 10000,
        secure: false,
        logLevel: 'debug'
      }
    )
  );
};
