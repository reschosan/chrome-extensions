const paths = require('react-scripts/config/paths');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Export override function(s) via object
module.exports = {
  webpack: override,
  // You may also override the Jest config (used for tests) by adding property with 'jest' name below. See react-app-rewired library's docs for details
};

// Function to override the CRA webpack config
function override(config, env) {
  // Replace single entry point in the config with multiple ones
  config.entry = {
    index: paths.appIndexJs,
    background: paths.appSrc + '/background.js',
  };
  // Change output filename template to get rid of hash there
  config.output.filename = '[name].js';
  //config.output.filename = 'static/js/[name].js';



  // Disable built-in SplitChunksPlugin
  config.optimization.splitChunks = {
    cacheGroups: {default: false}
  };
  // Disable runtime chunk addition for each entry point
  config.optimization.runtimeChunk = false;

  // Custom ManifestPlugin instance to cast asset-manifest.json back to old plain format
  const manifestPlugin = new ManifestPlugin({
    fileName: 'asset-manifest.json',
    generate: (seed, files, entrypoints) => {
      const manifestFiles = files.reduce((manifest, file) => {
        manifest[file.name] = file.path;
        return manifest;
      }, seed);
      const entrypointFiles = {};
      Object.keys(entrypoints).forEach(entrypoint => {
        entrypointFiles[entrypoint] = entrypoints[entrypoint].filter(fileName => !fileName.endsWith('.map'));
      });
 
      return {
        files: manifestFiles,
        entrypoints: entrypointFiles,
      };
    },
  });
  // Replace origin ManifestPlugin instance in config.plugins with the above one
  config.plugins = replacePlugin(config.plugins,
    (name) => /ManifestPlugin/i.test(name), manifestPlugin
  );

  // Custom MiniCssExtractPlugin instance to get rid of hash in filename template
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'static/css/[name].css'
  });
  // Replace origin MiniCssExtractPlugin instance in config.plugins with the above one
  config.plugins = replacePlugin(config.plugins,
    (name) => /MiniCssExtractPlugin/i.test(name), miniCssExtractPlugin
  );

  // Remove GenerateSW plugin from config.plugins to disable service worker generation
  config.plugins = replacePlugin(config.plugins,
    (name) => /GenerateSW/i.test(name)
  );

  return config;
}

// Utility function to replace/remove specific plugin in a webpack config
function replacePlugin(plugins, nameMatcher, newPlugin) {
  const i = plugins.findIndex((plugin) => {
    return plugin.constructor && plugin.constructor.name &&
      nameMatcher(plugin.constructor.name);
  });
  return i > -1?
    plugins.slice(0, i).concat(newPlugin || []).concat(plugins.slice(i+1)) :
    plugins;
}