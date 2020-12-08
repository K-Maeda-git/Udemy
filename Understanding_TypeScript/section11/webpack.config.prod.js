const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // インポートされたモジュールをどのように解決するか
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // ファイルを出力する前にdistフォルダを削除する
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ]
};
