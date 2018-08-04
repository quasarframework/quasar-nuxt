const { join, resolve } = require('path')
const {
  copyFileSync, existsSync, mkdirSync,
  readdirSync, statSync
} = require('fs')

// helper paths
const assetsRoot = resolve(__dirname, 'assets')
const projectRoot = resolve(__dirname, '../../../')
const projectAssetsPath = resolve(projectRoot, 'assets')
const quasarAssetsPath = resolve(projectAssetsPath, 'quasar')
const quasarAssetsThemesPath = resolve(quasarAssetsPath, 'themes')

// helper method
const recursiveReaddirSync = (dir) => {
  return readdirSync(dir).reduce((files, file) => {
    const fileName = join(dir, file)
    const isDirectory = statSync(fileName).isDirectory()

    return isDirectory ? [
      ...files, ...recursiveReaddirSync(fileName)
    ] : [
      ...files, fileName
    ]
  }, [])
}

// grab a list of theme files
const themeFiles = recursiveReaddirSync(assetsRoot)

/*
  if this is a fresh install or ~assets/quasar does not already exist in
  the project root, then create the default stylus files to aid users
 */
if (existsSync(projectAssetsPath) && !existsSync(quasarAssetsPath)) {
  mkdirSync(quasarAssetsPath)
  mkdirSync(quasarAssetsThemesPath)

  // copy theme files into project
  themeFiles.forEach(themeFile => {
    copyFileSync(
      themeFile,
      join(quasarAssetsPath, themeFile.replace(assetsRoot, ''))
    )
  })
}
