const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: {
    client: './src/client/index.tsx',
    server: './src/server/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  target: 'node',
  externals: [
    nodeExternals()
  ],
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['client'],
      filename: 'index.html',
      template: './src/client/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = config;