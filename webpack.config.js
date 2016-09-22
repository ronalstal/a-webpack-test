const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './example.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.h(andle)?b(ar)?s$/,
        loader: 'handlebars',
        query: {
          partialDirs: [
            path.join(__dirname, 'src', 'templates', 'partials'),
          ],
        }
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: 'index.hbs',
      title: 'Handlebars demo'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
