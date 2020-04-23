const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  mode: 'production',
  // mode: 'development',
  entry: {
    index: './components/Index.js',
  },
  output: {
    // filename: './[name].[contenthash].js',
    // filename: './[name].js',
    filename: './main.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html"
    // }),
    // new LiveReloadPlugin({ port: 4444 }), //<script src="http://localhost:4444/livereload.js"></script>
  ],
}
