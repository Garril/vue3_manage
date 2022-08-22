const path = require('path')

module.exports = {
  outputDir: './build',
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views'
      }
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
}
