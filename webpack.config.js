module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
}