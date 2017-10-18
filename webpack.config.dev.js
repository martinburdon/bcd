var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client')
      },
      // SCSS
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Images
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: ['url-loader']
      }
    ]
  }
};
