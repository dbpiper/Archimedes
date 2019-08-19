// eslint-disable-next-line import/no-extraneous-dependencies
const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

const webpackOptions = {
  watch: true,
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      '@util': path.resolve(__dirname, '../util'),
      '@src': path.resolve(__dirname, '../../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = wp(options);
