const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const basePath = __dirname;
const distPath = 'dist';
const indextInput = './src/index.html';
const indexOutput = 'index.html';

module.exports = {
  mode: 'development',
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunckhash][name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          MiniCSSExtract.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          MiniCSSExtract.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        user: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin()
  ]
};
