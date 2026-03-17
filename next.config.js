/** @type {import('next').NextConfig} */

const path = require('path')

const assetsHost = process.env.ASSETS_HOST
const basePath = process.env.GITHUB_PAGES_BASE_PATH || ''
const isGhPages = Boolean(basePath)

module.exports = {
  output: isGhPages ? 'export' : undefined,
  basePath: basePath || undefined,
  assetPrefix: assetsHost || (basePath ? basePath + '/' : undefined),
  trailingSlash: true,
  i18n: isGhPages
    ? undefined
    : {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
        localeDetection: false
      },
  cleanDistDir: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    }
  },
  experimental: {
    scrollRestoration: true
  },
  images: {
    unoptimized: isGhPages,
    // deviceSizes: [600, 960, 1280, 1920, 2650],
    // path: assetsHost ? `${assetsHost}/_next/image` : undefined,
    domains: ['station.garagemca.radio', 'station.garagemca.radio', 'cdn-ec-static.garagemca.org']
  }
}
