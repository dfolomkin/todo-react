const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
    app: './src/index.jsx'
  },

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name]-bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'todo-react',
      filename: 'index.html',
      template: 'src/index.tmpl.html',
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './',
    compress: true,
    port: 9000,
    hot: true
  }
};
