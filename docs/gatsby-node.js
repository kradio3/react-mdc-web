var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function(config, stage) {
  config.removeLoader('css');
  if(stage === 'develop') {
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/;
      cfg.loader = 'style!css';
      return cfg;
    });
  } else {
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/;
      cfg.loader =  ExtractTextPlugin.extract('css');
      return cfg;
    });
  }

  config.removePlugin('extract-text');
  config.plugin(
    'extract-text',
    ExtractTextPlugin,
    ["css/styles.css", { allChunks: true }]
  );
  return config;
}
