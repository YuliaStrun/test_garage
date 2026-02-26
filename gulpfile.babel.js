const exec = require('child_process').exec
const fs = require('fs')

const gulp = require('gulp')

const pkg = require('./package.json')

let platform = process.platform,
  /**
   * Opens the font-server defined in package.json
   *
   * @return {void} logs to terminal.
   */
  iconsEdit = () => {
    let linuxBrowser = null

    // Checks whether or not user has the Chrome browser on linux
    if (platform === 'linux') {
      const browserList = ['/opt/google/chrome/google-chrome', '/usr/bin/chromium', '/bin/chromium']
      browserList.find((i) => {
        if (fs.existsSync(i)) {
          linuxBrowser = i
          return true
        }
        return false
      })
      if (linuxBrowser === null) {
        console.log('You need Google Chrome and/or Chromium to run this script')
        return false
      }
    }

    let openFont = {
      linux: `${linuxBrowser} --enable-plugins ${pkg.config.iconsServer}/$(cat .fontello)`,
      darwin: `open -a "Google Chrome" ${pkg.config.iconsServer}/$(cat .fontello)`,
      win32: `start chrome "${pkg.config.iconsServer}/$(cat .fontello)"`
    }

    if (!openFont[platform]) {
      return false
    }

    // Connects to font server to get a fresh token for our editing session.
    // sends current config in the process.
    let getFontToken = `curl --silent --show-error --fail --output .fontello --form "config=@${pkg.config.iconsConfig}" ${pkg.config.iconsServer} \n`

    return exec(getFontToken + openFont[platform], function (err, stdout, stderr) {
      console.log(stdout)
      if (stderr) {
        console.error(err, stderr)
      }
    })
  },
  /**
   * Downloads and unpacks our updated font from the iconsServer
   *
   * @return {void} logs operations to terminal.
   */
  iconsSave = () => {
    var scripts = [
      'if test ! $(which unzip); then echo "Unzip is installed"; exit 128; fi',
      'rm -rf .fontello.src .fontello.zip',
      `curl --silent --show-error --fail --output .fontello.zip ${pkg.config.iconsServer}/$(cat .fontello)/get`,
      'unzip .fontello.zip -d .fontello.src'
    ]

    // Move typeface to multiple destinations
    for (var i = 0; i < pkg.config.iconsLocation.length; i++) {
      scripts.push(
        `cp $(find ./.fontello.src -maxdepth 1 -name 'fontello-*')/font/*.woff* ${pkg.config.iconsLocation[i]}`
      )
    }

    // Clean up
    scripts = scripts.concat([
      `mv $(find ./.fontello.src -maxdepth 1 -name 'fontello-*')/config.json ${pkg.config.iconsConfig}`,
      `mv $(find ./.fontello.src -maxdepth 1 -name 'fontello-*')/css/icon-codes.css ${pkg.config.iconsStyles}`,
      'rm -rf .fontello.src .fontello.zip'
    ])

    return exec(scripts.join(' \n '), function (err, stdout, stderr) {
      if (stderr) {
        console.error(err, stderr)
      } else {
        console.log(stdout)
      }
    })
  }

gulp.task('icons-edit', iconsEdit)
gulp.task('icons-save', iconsSave)
