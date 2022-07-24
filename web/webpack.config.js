const path = require('path');

module.exports = {
  mode: 'development',
  entry: './furlon/static/ts/main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'furlon/static/js'),
    publicPath: 'furlon/static/js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};