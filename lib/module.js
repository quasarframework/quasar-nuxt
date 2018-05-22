const { resolve } = require('path')

const defaults = {
  theme: 'mat',
  supportIE: false,
  extras: [],
  framework: {},
  animations: []
}

module.exports = async function module (moduleOptions) {
  const opts = Object.assign({}, defaults, this.options.quasar, moduleOptions)

  if (opts.extras) {
    opts.extras.filter(asset => asset).forEach(asset => {
      this.options.css.push(`quasar-extras/${asset}/${asset}.css`)
    })
  }
  if (opts.animations) {
    // TODO: animations = 'all'
    opts.animations.filter(asset => asset).forEach(asset => {
      this.options.css.push(`quasar-extras/animate/${asset}.css`)
    })
  }

  this.options.css.push(`quasar-framework/dist/umd/quasar.${opts.theme}.min.css`)

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'quasar-nuxt.js',
    options: opts
  })
}
