const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@'],
  quasar: {
    theme: 'mat',
    extras: [
      'material-icons',
      'ionicons'
    ],
    framework: {
      components: ['QBtn'],
      iconSet: 'ionicons'
    }
  }
}
