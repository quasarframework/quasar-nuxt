const
  { resolve } = require('path'),
  merge = require('webpack-merge')

const defaults = {
  theme: 'mat',
  supportIE: false,
  extras: [],
  framework: {
    all: true
  },
  animations: []
}

module.exports = async function module (moduleOptions) {
  const opts = merge({}, defaults, this.options.quasar, moduleOptions)

  if (opts.extras) {
    opts.extras.filter(asset => asset).forEach(asset => {
      this.options.css.unshift(`quasar-extras/${asset}/${asset}.css`)
    })
  }
  if (opts.animations) {
    // TODO: animations = 'all'
    opts.animations.filter(asset => asset).forEach(asset => {
      this.options.css.unshift(`quasar-extras/animate/${asset}.css`)
    })
  }

  this.options.css.unshift(`quasar-framework/dist/umd/quasar.${opts.theme}.min.css`)

  this.extendBuild(config => {
    // config.resolve.alias = config.alias || {}
    config.resolve.alias.quasar = `quasar-framework/dist/quasar.${opts.theme}.esm.js`
    /*
      .alias
        .set('quasar', api.resolve(`node_modules/`))
        .set('variables', api.resolve(`src/styles/quasar.variables.styl`))
        .set('quasar-variables', api.resolve(`node_modules/quasar-framework/dist/core.variables.styl`))
        .set('quasar-styl', api.resolve(`node_modules/quasar-framework/dist/quasar.${theme}.styl`))
    */
  })

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'quasar-nuxt.js',
    options: opts
  })
}
