const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    game: path.join(__dirname, 'src', 'main.js'),
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: /src/
      }
    ]
  }
}
