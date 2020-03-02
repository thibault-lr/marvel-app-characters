const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name].[hash].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.json'],
    alias: {
      components: path.resolve(__dirname, '..', 'src', 'components'),
      scss: path.resolve(__dirname, '..', 'src', 'scss'),
      resources: path.resolve(__dirname, '..','src','resources')
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|__tests__/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            query: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, '..', 'src', 'scss')],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(({
      title: 'Marvel characters',
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    })),
  ],

};
