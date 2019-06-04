const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// module.exports = withSass()
module.exports = withOffline(withCSS(withSass({
  crossOrigin: 'anonymous',
  exportPathMap() {
    const path = {};
    ['/feed', '/product'].forEach(page => {
      path[page] = {page};
    });
    return {
      '/': {page: '/index'},
      ...path,
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  },
  // workboxOpts: {},
})));