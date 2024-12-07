const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/movieproject-api/**',
    createProxyMiddleware({
      target: 'http://localhost:3000/users',
      changeOrigin: true,
      secure: false,
    })
  );
};
