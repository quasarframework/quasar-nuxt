const
  os = require('os'),
  { join, resolve } = require('path'),
  merge = require('webpack-merge'),
  { mkdirSync, writeFileSync, existsSync } = require('fs'),
  debug = require('debug')('nuxt:build (Quasar): ')

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

  /**
   * this section handles stylus inclusions and overrides for the Quasar Framework.
   * it will check for the presence of a quasar theme and associated files in the project
   * root dir: ~/assets/quasar and load it if it exists.
   *
   * we also enable a webpack 'resolve' alias for importing Quasar stylus variables
   * into the SFC's/components inside the <style lang="styl"></style> tags.
   */
  let rootOptions = this.options
  let quasarVariablesStylusPath = resolve(rootOptions.rootDir, `assets/quasar/themes/variables.${opts.theme}.styl`)
  let quasarAppStylusPath = resolve(rootOptions.rootDir, `assets/quasar/app.styl`)

  const tmpPath = join(os.tmpdir(), '/.quasar')
  const outFile = join(tmpPath, 'quasar.styl')

  // always include base theme stylus file
  const outFiles = [`~quasar-framework/src/css/${opts.theme}.styl`]

  // custom stylus variable overrides must go first in the queue
  if (existsSync(quasarVariablesStylusPath)) {
    outFiles.unshift(quasarVariablesStylusPath)

    debug(
      'Overriding stylus variables with',
      quasarVariablesStylusPath.replace(rootOptions.rootDir, '~')
    )
  }

  // app/global styles must go last in the queue
  if (existsSync(quasarAppStylusPath)) {
    outFiles.push(quasarAppStylusPath)

    debug(
      'Including general \'app\' styles from',
      quasarAppStylusPath.replace(rootOptions.rootDir, '~')
    )
  }

  // combine
  const outContent = outFiles
    .map(v => v.replace(/\\/g, '\\\\')) // replace backslash by double backslash (needed for windows)
    .map(v => `@import "${v}"`)
    .join('\n')

  // on first run, make a .tmp folder
  if (!existsSync(tmpPath)) {
    mkdirSync(tmpPath)
  }

  // output combined stylus file
  writeFileSync(outFile, outContent, 'utf8')

  // include it
  rootOptions.css.push(outFile)

  // our queue is larger then the default (1)
  if (outFiles.length > 1) {
    debug('Custom stylus files have been merged successfully')
  }

  this.extendBuild(config => {
    config.resolve.alias.quasar = `quasar-framework/dist/quasar.${opts.theme}.esm.js`
    config.resolve.alias['variables'] = resolve(rootOptions.rootDir, 'node_modules/quasar-framework/src/css/core.variables.styl')
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
