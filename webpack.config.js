const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "out",
    filename: "react-mdc-web.js",
    library: "ReactMdcWeb",
    libraryTarget: "umd",
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  devtool: 'sourcemap',
  module: {
    loaders: [ { 
      test: /\.js$/, 
      loader: 'babel-loader', 
      exclude: /(node_modules)/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    } ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }),
  ],
};
