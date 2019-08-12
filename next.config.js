const { PHASE_PRODUCTION_BUILD } = require('next-server/constants');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass')({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[path]___[local]___[hash:base64:5]',
  },
  [PHASE_PRODUCTION_BUILD]: {
    cssLoaderOptions: {
      localIdentName: '[hash:base64:8]',
    },
  },
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withConfig = nextRuntimeDotenv({
  server: ['BACKEND_ENDPOINT', 'PORT'],
});

module.exports = withConfig(
  withPlugins([[withSass], [withBundleAnalyzer]], {}),
);
