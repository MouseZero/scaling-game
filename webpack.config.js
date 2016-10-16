const path = require('path')

module.exports = {
  entry: {
    game: path.join(__dirname, 'src', 'public', 'main.js')
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/
      }
    ]
  }
}
