const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next-server/constants');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withProgressBar = require('next-progressbar');

const withConfig = nextRuntimeDotenv({
  server: ['BACKEND_ENDPOINT', 'PORT'],
  public: ['BACKEND_ENDPOINT', 'PORT'],
});

module.exports = withConfig(
  withPlugins([
    [withSass, {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path][name]__[local]__[hash:base64:5]',
      },
      [PHASE_PRODUCTION_BUILD + PHASE_PRODUCTION_SERVER]: {
        cssLoaderOptions: {
          localIdentName: '[hash:base64]',
        },
      },
    }],
    [withBundleAnalyzer, {
      enabled: process.env.ANALYZE === 'true',
    }],
    [withProgressBar, {}],
  ]),
);
