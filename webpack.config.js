const path = require('path');

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
};

module.exports = (env, argv) => {
  return config;
};