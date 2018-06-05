const
  { resolve } = require('path'),
  merge = require('webpack-merge')

const defaults = {
  theme: 'mat',
  supportIE: false,
  extras: [],
  framework: {
    all: true,
    config: {}
  },
  animations: false
}

const cdn = {
  fontawesome: '//use.fontawesome.com/releases/v5.0.13/css/all.css',
  ionicons: '//cdn.jsdelivr.net/npm/ionicons@^4.0.0/dist/css/ionicons.min.css',
  mdi: '//cdn.jsdelivr.net/npm/@mdi/font@^2.0.0/css/materialdesignicons.min.css',
  animations: '//cdn.jsdelivr.net/npm/animate.css@^3.5.2/animate.min.css'
}

module.exports = async function module (moduleOptions) {
  const
    opts = merge({}, defaults, this.options.quasar, moduleOptions),
    cdnCSS = []

  if (opts.extras) {
    const googleFont = []

    opts.extras.filter(asset => asset).forEach(asset => {
      if (asset === 'material-icons') {
        googleFont.push('Material+Icons')
      }
      else if (asset === 'roboto') {
        googleFont.push('Roboto:100,300,400,500,700,900')
      }
      else if (cdn[asset]) {
        cdnCSS.push(cdn[asset])
      }
    })

    if (googleFont.length > 0) {
      cdnCSS.push('//fonts.googleapis.com/css?family=' + googleFont.join('|'))
    }
  }

  if (opts.animations) {
    cdnCSS.push(cdn.animations)
  }

  cdnCSS.forEach(href => {
    this.options.head.link.push({
      rel: 'stylesheet',
      type: 'text/css',
      href
    })
  })

  this.options.css.unshift(`quasar-framework/dist/umd/quasar.${opts.theme}.min.css`)

  this.extendBuild(config => {
    config.resolve.alias.quasar = `quasar-framework/dist/quasar.${opts.theme}.esm.js`
    /*
      .alias
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
