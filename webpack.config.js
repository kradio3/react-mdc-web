const webpack = require('webpack');

module.exports = {
  entry: {
    "react-mdc-web": "./src/index.js",
    "react-mdc-web.defaultTheme": "./src/defaultTheme.js",
  },
  output: {
    path: "out",
    filename: "[name].js",
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
