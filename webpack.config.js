module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/,
        loader: "style!css" 
      }, {
        test: /\.js$/,
        exclude: /(node_modules|server|test)/,
        loader: 'babel',
        query: {
          presets: [ 'es2015' ]
        }
      }
    ]
  }
}