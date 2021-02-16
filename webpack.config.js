const path = require('path');

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = (env, argv) => {
  config.devtool = (argv.mode === 'production') ? false : 'eval-cheap-module-source-map';
  return config;
};
