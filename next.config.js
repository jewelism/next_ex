const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// module.exports = withSass()
module.exports = withOffline(withCSS(withSass({
  crossOrigin: 'anonymous',
  exportPathMap() {
    return {
      '/index': {page: '/index'},
      '/about': {page: '/about'}
    }
  },
})));