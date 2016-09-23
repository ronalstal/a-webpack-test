const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.h(andle)?b(ar)?s$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'src', 'templates', 'partials'),
          ],
          helperDirs: [
            path.join(__dirname, 'src', 'templates', 'helpers'),
          ]
        }
      },
    ]
  },

  plugins: [
    // new ExtractTextPlugin('styles.css')
  ]
};
